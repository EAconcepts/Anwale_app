const User = require("../models/userModel");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

// Protect middleware, adds req.user
// @desc Checks if user is authenticated
// By checking authorization headers for bearer token
exports.protect = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next(new AppError("Unauthorized, Token Required", 403));
  }
  const token = authorization.split(" ")[1];

  try {
    const { id } = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);
    req.user = user.id;
    next();
  } catch (err) {
    console.log(err);
    next(new AppError("Request not authorized", 403));
  }
};
