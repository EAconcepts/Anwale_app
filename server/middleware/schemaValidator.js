const AppError = require("../utils/appError");

// Middleware to validate JOi schemas
exports.validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(res.body);
  if (error) {
    return next(new AppError(error.details[0].message, 400));
  } else {
    next();
  }
};
