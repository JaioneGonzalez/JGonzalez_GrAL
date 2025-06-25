var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const PORT = 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Serve static recordings
app.use("/recordings", express.static(path.join(__dirname, "recordings")));

// List all users (folders inside /recordings)
app.get("/api/users", (req, res) => {
  const recordingsPath = path.join(__dirname, "recordings");
  const users = fs
    .readdirSync(recordingsPath)
    .filter((file) =>
      fs.statSync(path.join(recordingsPath, file)).isDirectory()
    );
  res.json(users);
});

// List sessions for one user
app.get("/api/users/:user/sessions", (req, res) => {
  const userFolder = path.join(__dirname, "recordings", req.params.user);
  if (!fs.existsSync(userFolder)) {
    return res.status(404).json({ error: "User not found" });
  }
  const sessions = fs
    .readdirSync(userFolder)
    .filter((file) => file.endsWith(".json"));
  res.json(sessions);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:3000`));

module.exports = app;
