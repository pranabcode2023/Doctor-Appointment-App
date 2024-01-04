import axios from "axios";
import React, { useEffect } from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  // get user Data

  const getUserData = async () => {
    try {
      const res = await axios.post(
        // "http://localhost:8080/api/v1/user/getUserData ",
        `${process.env.REACT_APP_BASE_URL}/api/v1/user/getUserData`,
        {},
        {
          headers: {
            // must have one space after Bearer . read documentation
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1> HomePage</h1>
    </Layout>
  );
};

export default HomePage;
