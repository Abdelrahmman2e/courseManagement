const asyncHandler = require("express-async-handler");
const AppError = require("../utils/AppError");
const Course = require("../models/courseModel");
const AppFeatures = require("../utils/AppFeatures");

exports.createCourse = asyncHandler(async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      newCourse,
    },
  });
});

exports.getAllCourses = asyncHandler(async (req, res) => {
  //Build Query
  const features = new AppFeatures(Course.find(), req.query)
    .filter()
    .sort()
    .fieldsLimit()
    .search();

  const paginatedFeatures = await features.paginate();
  const { query, paginationResult } = paginatedFeatures;

  //Execute Query
  const courses = await query;

  res.status(200).json({
    results: courses.length,
    paginationResult,
    data: courses,
  });
});

exports.getCourseById = asyncHandler(async (req, res, nxt) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return nxt(new AppError(`No Course found with that ID :${id}`, 404));
  }

  res.status(200).json({
    status: "Success",
    data: course,
  });
});

exports.deleteCourse = asyncHandler(async (req, res, nxt) => {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id);
  if (!course) {
    return nxt(new AppError(`No Course found with that ID :${id}`, 404));
  }

  res.status(204).send();
});

exports.updateCourse = asyncHandler(async (req, res, nxt) => {
  const { id } = req.params;
  const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
  if (!course) {
    return nxt(new AppError(`No Course found with that ID :${id}`, 404));
  }

  res.status(200).json({
    status: "Success",
    data: course,
  });
});
