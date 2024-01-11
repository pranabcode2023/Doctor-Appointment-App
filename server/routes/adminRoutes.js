const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  getAdminProfileController,
  updateAdminProfileController,
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

// admin info( post method)
router.post("/getAdminProfile", authMiddleware, getAdminProfileController);

// update Admin Profile ( post method)

router.post(
  "/updateAdminProfile",
  authMiddleware,
  updateAdminProfileController
);

module.exports = router;
