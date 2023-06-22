const jwt = require("jsonwebtoken");
const catchAsync = require("./catchAsync");

module.exports = catchAsync(async (payload, signature, expires) => {
  return await jwt.sign(payload, signature, {
    expiresIn: expires,
  });
});
