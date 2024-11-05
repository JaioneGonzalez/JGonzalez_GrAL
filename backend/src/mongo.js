const mongojs = require("mongojs");

const db = mongojs("mongodb://localhost:27017/GrAL", ["erabiltzaile_datuak"]);

module.exports = db;
