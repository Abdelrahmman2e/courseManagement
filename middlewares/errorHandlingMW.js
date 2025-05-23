module.exports = (err, req, res, nxt) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV == "development") {
    sendErrorForDev(err, res);
  } else if (process.env.NODE_ENV == "production") {
    sendErrorForProd(err, res);
  }
};

sendErrorForDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
sendErrorForProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
