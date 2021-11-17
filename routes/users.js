/** Routes for users of pg-intro-demo. */

const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(`SELECT * FROM users`);

    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});

router.get("/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const results = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (results.rows.length === 0) {
      throw new ExpressError(
        `Can't find user with username of ${username}`,
        404
      );
    }
    return res.send({ user: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const results = await db.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username, password",
      [username, hashedPassword]
    );
    return res.status(201).json({ user: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

// router.patch("/:username", async (req, res, next) => {
//   try {
//     const { username } = req.params;
//     const { password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 12);


//     const results = await db.query(
//       "UPDATE users SET username=$1, password=$2 WHERE username=$3 RETURNING username",
//       [username, hashedPassword]
//     );
//     if (results.rows.length === 0) {
//       throw new ExpressError(`Can't update user with username of ${username}`, 404);
//     }
//     return res.send({ user: results.rows[0] });
//   } catch (e) {
//     return next(e);
//   }
// });

router.delete("/:username", async (req, res, next) => {
  try {
    db.query("DELETE FROM users WHERE username = $1", [req.params.username]);
    return res.send({ msg: "DELETED!" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
