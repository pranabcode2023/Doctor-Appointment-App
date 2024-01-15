import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Table, message } from "antd";
import serverURL from "../../vercelConfig/serverURL";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  // get All users
  const getDoctors = async () => {
    try {
      const res = await axios.get(
        // `${process.env.REACT_APP_BASE_URL}/api/v1/admin/getAllDoctors`,
        `${serverURL}/api/v1/admin/getAllDoctors`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  // handle Account Status

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        // `${process.env.REACT_APP_BASE_URL}/api/v1/admin/changeAccountStatus`,
        `${serverURL}/api/v1/admin/changeAccountStatus`,
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  //antD table Columns

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },

    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record, "accepted")}
            >
              Accept
            </button>
          ) : (
            <button className="btn btn-danger">Reject</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">All Doctors</h1>
      <Table rowKey="_id" columns={columns} dataSource={doctors} />
    </Layout>
  );
};

export default Doctors;
