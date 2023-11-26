const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userControllers");

//router object

const router = express.Router();

//Routes

//Login routes ( post method)
router.post("/login", loginController);

//register routes ( post method)
router.post("/register", registerController);

module.exports = router;
