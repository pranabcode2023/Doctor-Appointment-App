const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  getDoctorProfileController,
  updateDoctorProfileController,
} = require("../controllers/doctorController");

const router = express.Router();

// Single doctor info( post method)
router.post("/getDoctorProfile", authMiddleware, getDoctorProfileController);

// update doctor Profile

router.post(
  "/updateDoctorProfile",
  authMiddleware,
  updateDoctorProfileController
);

module.exports = router;
