const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

// To get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

// Post a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a new workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Post a new workout" });
});

module.exports = router;
