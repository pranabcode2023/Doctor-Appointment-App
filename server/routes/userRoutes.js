const express = require("express");
const {
  loginController,
  registerController,
  getUserDataController,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

//router object

const router = express.Router();

//Routes

//Login routes ( post method)
router.post("/login", loginController);

//register routes ( post method)
router.post("/register", registerController);

// getUserData routes ( post method)

router.post("/getUserData", authMiddleware, getUserDataController);

module.exports = router;
