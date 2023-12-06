import axios from "axios";
import React, { useEffect } from "react";

const HomePage = () => {
  // get user Data

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getUserData ",
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
    <div>
      <h1> HomePage</h1>
    </div>
  );
};

export default HomePage;
