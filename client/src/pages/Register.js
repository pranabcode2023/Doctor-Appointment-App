import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import serverURL from "../vercelConfig/serverURL";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // registration from controll

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        // "http://localhost:8080/api/v1/user/register",
        `${process.env.REACT_APP_BASE_URL}/api/v1/user/register`,
        `${serverURL}/api/v1/user/register`,
        values
      );

      dispatch(hideLoading());
      console.log(res);
      if (res.data.success) {
        message.success("Registration Successfull");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong ");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          className="register-form"
          layout="vertical"
          onFinish={onfinishHandler}
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            {" "}
            Already registerd? go for login
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
