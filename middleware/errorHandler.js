const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation_Error",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not_Found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "Not_Found",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No error, Everything's fine...");
      break;
  }
};

module.exports = { errorHandler };
