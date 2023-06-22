const User = require("../../models/user");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const bcrypt = require("bcrypt");

module.exports = catchAsync(async (req, res, next) => {
  const { email, password, location, name } = req.body;

  // Check if user exists
  const exists = await User.findOne({ email });
  if (exists) return next(new AppError("User already exists", 400));

  // Hash password
  const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);
  // Save user to database
  const newUser = await User.create({
    email,
    password: hashedPassword,
    location,
    name,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
