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
// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
// app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//test Purpose
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: " server running sucessfully",
//   });
// });

//port
const port = process.env.PORT || 8080;

//vercel deploy config
const allowedOrigins = [
  "http://localhost:3000",
  "https://doctor-appointment-app-client.vercel.app",
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(cors(corsOptions));

app.use(cors());

// listen port

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.bgYellow
  );
});
