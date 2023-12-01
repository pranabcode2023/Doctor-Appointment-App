const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
// const userRoutes = require("./routes/userRoutes");
//dotenv config
dotenv.config();

// mongoDB connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
// app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user", require("./routes/userRoutes"));

//test Purpose
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: " server running sucessfully",
//   });
// });

//port
const port = process.env.PORT || 8080;

// listen port

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.bgYellow
  );
});
