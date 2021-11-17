const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(`SELECT * FROM colorings`);

    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});



module.exports = router;
