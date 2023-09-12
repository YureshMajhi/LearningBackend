const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// To get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a new workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Post a new workout" });
});

module.exports = router;
