const Quiz = require("../models/quiz");

// Create a new quiz
exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: "Error creating quiz", error });
  }
};

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes", error });
  }
};

// Get a single quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz", error });
  }
};

// Update a quiz
exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error updating quiz", error });
  }
};

// Delete a quiz
exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json({ message: "Quiz deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting quiz", error });
  }
};

// // Update a specific question in a quiz
// router.put("/quizzes/:quizId/questions/:questionId", async (req, res) => {
//   const { quizId, questionId } = req.params;
//   const updatedQuestion = req.body;

//   try {
//     const quiz = await Quiz.findById(quizId);
//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     const question = quiz.questions.id(questionId);
//     if (!question) {
//       return res.status(404).json({ message: "Question not found" });
//     }

//     question.text = updatedQuestion.text;
//     question.options = updatedQuestion.options;
//     question.answer = updatedQuestion.answer;

//     await quiz.save();

//     res.status(200).json({ message: "Question updated successfully", quiz });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Delete a specific question from a quiz
// router.delete("/questions", async (req, res) => {
//   const { quizId, questionId } = req.params;

//   try {
//     const quiz = await Quiz.findById(quizId);
//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     const question = quiz.questions.id(questionId);
//     if (!question) {
//       return res.status(404).json({ message: "Question not found" });
//     }

//     question.remove();
//     await quiz.save();

//     res.status(200).json({ message: "Question deleted successfully", quiz });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get all questions for a specific quiz
// router.get("/quizzes/:quizId/questions", async (req, res) => {
//   const { quizId } = req.params;

//   try {
//     const quiz = await Quiz.findById(quizId);
//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     res.status(200).json(quiz.questions);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
//test
