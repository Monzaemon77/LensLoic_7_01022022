const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");
const commentRoute = require("./routes/comment.routes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

module.exports = app;
