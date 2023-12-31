const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminControllers");

const router = express.Router();

//get All users (get method)
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get All Doctors (get method)
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// Account status (post method)
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
