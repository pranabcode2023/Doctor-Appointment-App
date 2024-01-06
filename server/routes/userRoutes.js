const express = require("express");
const {
  loginController,
  registerController,
  getUserDataController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
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

// get all Notification doctor routes ( post method)

router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// delete Notification doctor routes ( post method)
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//get all doctor
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
