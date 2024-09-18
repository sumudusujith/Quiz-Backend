const express = require("express");

const router = express.Router();

const {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

// Define routes for CRUD operations
router.post("/quiz", createQuiz); // Create
router.get("/quiz", getQuizzes); // Read all
router.get("/quiz/:id", getQuizById); // Read single
router.put("/quiz/:id", updateQuiz); // Update
router.delete("/quiz/:id", deleteQuiz); // Delete

module.exports = router;
