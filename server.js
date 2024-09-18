const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/db/connection");
const quizRoutes = require("./src/routes/quizRoutes");
const cors = require("cors");

dotenv.config();

async function main() {
  await connectDB();

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // Routes
  app.use("/api", quizRoutes);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// // const quizRoutes = require('./routes/quizRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // app.use('/api/quizzes', quizRoutes);

// console.log("Base URL", process.env.MONGO_URI);
// const baseUrl =
//   "mongodb+srv://sumudusujith:4lf3lapsqGDooIj3@cluster0.mzlfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(
//     baseUrl
//     // {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     // }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // app.get("", async (req, res) => {
// //   const quizzes = await Quiz.find();
// //   res.json(quizzes);
// // });

// const port = process.env.PORT || 5001;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// app.get("/api/quiz", async (req, res) => {
//   try {
//     res.status(200).json({ message: "OK", data: [{ name: "test", id: "1" }] });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
