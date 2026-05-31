const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(
    {
      userId: user.userId || user.id,
      email: user.email,
      role: user.role
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "15m" }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    {
      userId: user.userId || user.id
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "7d" }
  );
}

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
