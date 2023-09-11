require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./Routes/workout");

// Express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to the database and listening on new port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
