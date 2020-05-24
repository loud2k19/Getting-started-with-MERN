const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // token from header
  const token = req.header("x-auth-token");
  //if no token
  if (!token) {
    return res.status(401).json({ msg: "no token" });
  }
  //token verificatino
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
    //sres.json({ msg: "got stuck" });
  } catch (err) {
    res.status(401).json({ msg: "toKen experied" });
  }
};
