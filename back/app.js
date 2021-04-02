const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

const db = require("./models");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const appRouter = require("./routes/user");
const hashRouter = require("./routes/hashtag");
const passportConfig = require("./passport");

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: ["http://localhost:3000", "nodebird.com", "http://18.222.45.71"],
    credentials: true,
  })
);
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res, next) => {
  res.send("Hello express");
});

app.use("/post", postRouter);
app.use("/posts", postsRouter);

app.use("/user", appRouter);

app.use("/hashtag", hashRouter);

app.listen(80, () => {
  console.log("서버 실행");
});
