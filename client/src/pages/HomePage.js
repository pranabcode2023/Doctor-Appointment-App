import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import { serverURL } from "../vercelConfig/serverURL";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  // get Doctors Data

  const getUserData = async () => {
    try {
      const res = await axios.get(
        // "http://localhost:8080/api/v1/user/getUserData ",
        // `${process.env.REACT_APP_BASE_URL}/api/v1/user/getAllDoctors`,
        `${serverURL}/api/v1/user/getAllDoctors`,
        {
          headers: {
            // must have one space after Bearer . read documentation
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1 className="text-center"> HomePage</h1>
      <Row>
        {doctors &&
          doctors.map((doctor) => (
            <DoctorList key={doctor._id} doctor={doctor} />
          ))}
      </Row>
    </Layout>
  );
};

export default HomePage;
