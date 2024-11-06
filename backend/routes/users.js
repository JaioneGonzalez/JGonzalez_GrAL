var express = require("express");
var router = express.Router();
const db = require("../src/mongo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  console.log(req.body);
  db.erabiltzaile_datuak.findOne(
    { erabiltzaile: req.body.erabiltzaile },
    (err, docs) => {
      if (err) {
        res.send("error");
      } else {
        if (docs) {
          res.send("username already in use");
        } else {
          db.erabiltzaile_datuak.insert(req.body, (err) => {
            if (err) {
              res.send("error");
            } else {
              res.send("register successful");
            }
          });
        }
      }
    }
  );
});

module.exports = router;
