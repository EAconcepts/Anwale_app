const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  role: {
    type: String,
    enum: ["admin", "agent", "user"],
    default: "user",
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
