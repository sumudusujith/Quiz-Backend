const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  form: {
    type: ["Mixed"],
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

// const optionSchema = new mongoose.Schema({
//   value: { type: String, required: true },
//   label: { type: String, required: true },
// });

// const questionSchema = new mongoose.Schema({
//   id: { type: String, required: true, unique: true },
//   type: { type: String, required: true },
//   label: { type: String, required: true },
//   required: { type: Boolean, required: true },
//   options: [optionSchema], // For select, radio questions
//   conditions: { type: Map, of: [String] }, // Conditional logic
// });

// module.exports = mongoose.model("Quiz", questionSchema);

// const QuizForm = require("./models/QuizForm"); // Assuming the schema is saved as QuizForm.js

// // JSON data (from your provided JSON)
// const quizData = {
//   form: [
//     {
//       id: "q1",
//       type: "text",
//       label: "What is your name?",
//       required: true,
//     },
//     {
//       id: "q2",
//       type: "select",
//       label: "What is your age range?",
//       options: [
//         { value: "under_18", label: "Under 18" },
//         { value: "18_21", label: "18-21" },
//         { value: "22_25", label: "22-25" },
//         { value: "26_35", label: "26-35" },
//         { value: "36_45", label: "36-45" },
//         { value: "46_60", label: "46-60" },
//         { value: "above_60", label: "Above 60" },
//       ],
//       required: true,
//     },
//     {
//       id: "q3",
//       type: "text",
//       label: "What is your occupation?",
//       required: false,
//       conditions: {
//         q2: ["18_21", "22_25", "26_35", "36_45", "46_60", "above_60"],
//       },
//     },
//     // Add remaining questions...
//   ],
// };

// // Insert the quiz data into MongoDB
// QuizForm.create(quizData)
//   .then(() => {
//     console.log("Quiz data inserted successfully!");
//   })
//   .catch((err) => {
//     console.error("Error inserting quiz data:", err);
//   });

// const mongoose = require("mongoose");

// // Define the Question schema
// const questionSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//   },
//   options: {
//     type: [String],
//     required: true,
//   },
//   answer: {
//     type: String,
//     required: true,
//   },
// });

// // Define the Quiz schema
// const quizSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   questions: [questionSchema],
// });

// const Quiz = mongoose.model("Quiz", quizSchema);

// module.exports = Quiz;
