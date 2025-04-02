const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        return next(new Error("User is not Authorized !!")); // Properly handle errors
      }
      req.user = decoded.user;
      next(); // This moves to the next middleware
    });
  } else {
    res.status(401);
    return next(new Error("User is not Authorized or Token is missing"));
  }
});

module.exports = validateToken;
