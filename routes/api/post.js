const express = require("express");
const router = express.Router();

//@route  GeT api/post
//@desc   test route
//@access public
router.get("/", (req, res) => res.send("post route"));

module.exports = router;
