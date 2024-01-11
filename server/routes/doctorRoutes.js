const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  getDoctorProfileController,
  updateDoctorProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorController");

const router = express.Router();

// Single doctor info( post method)
router.post("/getDoctorProfile", authMiddleware, getDoctorProfileController);

// update doctor Profile ( post method)

router.post(
  "/updateDoctorProfile",
  authMiddleware,
  updateDoctorProfileController
);

// get single doctor Information
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// get doctors Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

// update status (post method)
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
