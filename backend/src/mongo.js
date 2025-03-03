const mongojs = require("mongojs");

const db = mongojs("mongodb://mongodb:27017/GrAL", ["erabiltzaile_datuak"]);

module.exports = db;
