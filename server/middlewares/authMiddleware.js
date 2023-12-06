const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split("")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return res.status(401).send({
          message: "Error in token middleware",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Authorization failed",
    });
  }
};

module.exports = { authMiddleware };
