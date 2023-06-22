const catchAsync = require("../utils/catchAsync");

// @desc Get all Users
// @route '/'

// @method GET
exports.getUsers = catchAsync(async (req, res, next) => {
  res.json({
    status: "success",
    data: "Success",
  });
});

// @desc Create a new user
// @route '/signup'
// @method POST
exports.signup = catchAsync(async (req, res) => {
  res.json({
    status: "success",
    data: "Success",
  });
});

// @desc Get a single user
// @route '/:id'
// @method GET
exports.getUser = catchAsync(async (req, res) => {
  res.json({
    status: "success",
    data: "Success",
  });
});

// @desc update user
// @route '/:id'
// @method PATCH
exports.updateUser = catchAsync(async (req, res) => {
  res.json({
    status: "success",
    data: "Success",
  });
});

// @desc delete user
// @route '/:id'
// @method DELETE
exports.deleteUser = catchAsync(async (req, res) => {
  res.json({
    status: "success",
    data: "Success",
  });
});
