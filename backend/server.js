const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");

require("dotenv").config();
// const cors = require("cors")
const db = require("./config/dbConfig");
const userRoute = require("./routes/userRoutes");
const examRoute = require("./routes/examRoutes");
const reportRoute = require("./routes/reportRoutes");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.connectDB();
app.use("/api/user", userRoute);
app.use("/api/exams", examRoute);
app.use("/api/reports", reportRoute);

// app.use(express.urlencoded({ extended: true }))
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/build")));

app.get("/",(req,res)=>{
  res.send("helo g")
})
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
