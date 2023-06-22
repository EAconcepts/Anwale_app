const User = require("../../models/user");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");

module.exports = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // get user from DB
  const user = await User.findOne({ email });
  //  if user doesn't exist or password don't match
  if (!user) return next(new AppError("Invalid email or password", 400));

  // compare password
  const match = await bcrypt.compare(password, user.password);
  //  if password don't match
  if (!match) return next(new AppError("Invalid email or password", 400));

  // generate token and Send token
  const accessToken = generateToken(
    { id: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    "10m"
  );
  const refreshToken = generateToken(
    { id: user._id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    "30d"
  );

  //   send refreshToken as cookie
  //   Send Response
  res.status(200).json({
    status: "success",
    data: {
      user,
      token: accessToken,
    },
  });
});
