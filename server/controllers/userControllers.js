const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");

const loginController = () => {};

// register controller
const registerController = async (req, res) => {
  try {
    // existingUser
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }

    // password

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // replace password with hashed password
    req.body.password = hashedPassword;

    // new User

    const newUser = new userModel(req.body);
    await newUser.save();
    res
      .status(201)
      .send({ message: "Registration Successfull", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller Error ${error.message}`,
    });
  }
};

module.exports = { loginController, registerController };
