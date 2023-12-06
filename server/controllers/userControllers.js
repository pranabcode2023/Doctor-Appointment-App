const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    //or anther method
    // const newUser = new userModel({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: hashedPassword,
    // });
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

// Login controller
const loginController = async (req, res) => {
  try {
    // filter for checking user
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }

    // filter for compare password and decryption of password

    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) {
      return res
        .status(200)
        .send({ message: "Email or Password wrong", success: false });
    }

    // if there is user and password then generate token for user to secure our app

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expireIn: "1d",
    });
    res
      .status(200)
      .send({ message: "Login successfull", sucess: true, token: token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Error in login controller ${error.message}` });
  }
};

module.exports = { loginController, registerController };
