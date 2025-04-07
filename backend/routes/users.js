// filepath: /c:/Users/jaita/Desktop/___GrAL___/GrAL_git/JGonzalez_GrAL/backend/routes/users.js
const express = require("express");
const router = express.Router();
const db = require("../src/mongo");
const cors = require("cors");

// Ensure you have body-parser middleware to parse JSON request bodies
const bodyParser = require("body-parser");
router.use(express.json());

// Use CORS middleware
router.use(cors());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// login
router.post("/login", (req, res) => {
  console.log("Received POST request");
  console.log("Request body:", req.body);

  // Check if the database connection is established
  if (!db || !db.erabiltzaile_datuak) {
    console.error("Database connection is not established");
    return res.status(500).send("Database connection error");
  }

  const { erabiltzaile, password } = req.body;

  // Check if both username and password are provided
  //if (!erabiltzaile || !password) {
  //  console.log("Missing username or password");
  //  return res.status(400).send("Missing username or password");
  //}

  // Find the user by username
  db.erabiltzaile_datuak.findOne(
    { erabiltzaile: req.body.erabiltzaile },
    (err, docs) => {
      if (err) {
        console.error("Error finding user:", err);
        return res.status(500).send("Error while checking login");
      }

      if (!docs) {
        console.log("User not found");
        return res.status(404).send("User not found");
      }

      // Check if the password matches
      if (docs.password !== password) {
        console.log("Incorrect password");
        return res.status(401).send("Incorrect password");
      }

      console.log("Login successful");
      return res.status(200).send("Login successful");
    }
  );
});

// register
router.post("/register", (req, res) => {
  console.log("Received POST request");
  console.log("Request body:", req.body);

  // Check if the database connection is established
  if (!db || !db.erabiltzaile_datuak) {
    console.error("Database connection is not established");
    return res.status(500).send("Database connection error");
  }

  db.erabiltzaile_datuak.findOne(
    { erabiltzaile: req.body.erabiltzaile },
    (err, docs) => {
      if (err) {
        console.error("Error finding user:", err);
        res.status(500).send("error");
      } else {
        if (docs) {
          console.log("Username already in use");
          res.status(409).send("username already in use");
        } else {
          db.erabiltzaile_datuak.insert(req.body, (err) => {
            if (err) {
              console.error("Error inserting user:", err);
              res.status(500).send("error");
            } else {
              console.log("Register successful");
              res.status(201).send("register successful");
            }
          });
        }
      }
    }
  );
});

module.exports = router;
