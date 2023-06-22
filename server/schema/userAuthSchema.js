const Joi = require("joi");

exports.loginSchema = Joi.object.keys({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

exports.signupSchema = Joi.object.keys({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  location: Joi.string().required(),
  password: Joi.string().min(6).required(),
  passwordConfirm: Joi.string().valid(Joi.ref("password")).required(),
});
