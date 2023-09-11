const express = require("express");
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
  res.sendData("Hello Workout Guys");
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
