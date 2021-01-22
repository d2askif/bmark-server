const express = require("express");
const expressJwt = require("express-jwt");
const benchmarkCtrl = require("./benchmark.controller");
const config = require("../../config/config");

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/benchmark/create - Returns new benchmark */
router.route("/create").post(benchmarkCtrl.create);

module.exports = router;
