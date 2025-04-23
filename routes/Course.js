const express = require("express");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  deleteCourse,
  updateCourse,
} = require("../services/courseService");

const {
  getCourseValidator,
  deleteCourseValidator,
  createCourseValidator,
  updateCourseValidator,
} = require("../utils/validators/courseValidator");

const router = express.Router();

// Base routes - these should come first
router.get("/", getAllCourses);
router.post("/", createCourseValidator, createCourse);

// Parameterized routes - these should come after base routes
router.get("/:id", getCourseValidator, getCourseById);
router.delete("/:id", deleteCourseValidator, deleteCourse);
router.put("/:id", updateCourseValidator, updateCourse);

module.exports = router;
