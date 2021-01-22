const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const APIError = require("../helpers/APIError");
const config = require("../../config/config");

/**
 * This will return ne benchmark
 * @param req
 * @param res
 * @returns {*}
 */

function create(req, res) {
  return res.json({ benchmark: "created" });
}

module.exports = { create };
