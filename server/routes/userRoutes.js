const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const login = require("../controllers/userController/login");
const signup = require("../controllers/userController/signup");
const { validateSchema } = require("../middleware/schemaValidator");
const { loginSchema, signupSchema } = require("../schema/userAuthSchema");

// Auth routes
router.post("/login", validateSchema(loginSchema), login);
router.post("/signup", validateSchema(signupSchema), signup);

// Crud routes
router.route("/").get(userController.getUsers).post(userController.signup);
router
  .route(":id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
