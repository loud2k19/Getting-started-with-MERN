const express = require("express");
const router = express.Router();

//@route  GeT api/users
//@desc   test route
//@access public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
