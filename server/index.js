const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION, Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
const PORT = process.env.PORT || 4000;

// DB connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Anwale API running 🥳");
});

// Route middleware
app.use("api/v1/users", userRoutes);

// Catch All route
app.all("*", (req, res) => {
  // const err = new Error(`Invalid Route or Method ${req.originalUrl}`);
  // err.status = "fail";
  // err.statusCode = 404;

  next(new AppError(`Invalid Route or Method ${req.originalUrl}`), 404);
});

// Error handling middleware
app.use(globalErrorHandler);

// Listen for Requests
const server = app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

// Handling Uncaught Promise rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION, Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
