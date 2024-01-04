const express = require("express");
const {
  loginController,
  registerController,
  getUserDataController,
  applyDoctorController,
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

// apply-doctor routes ( post method)

router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;
