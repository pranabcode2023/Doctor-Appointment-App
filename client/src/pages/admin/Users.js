import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Table } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);

  // get All users
  const getUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admin/getAllUsers`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  //antD table Columns

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.isAdmin ? null : record.isDoctor ? ( // If user is admin, show nothing
            // If user is a doctor, show the button
            <button className="btn btn-danger">Remove</button>
          ) : (
            // For other users, show the same button
            <button className="btn btn-danger">Remove</button>
          )}
          {/* <button className="btn btn-danger">Not Accepted</button> */}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">Users list</h1>

      <Table columns={columns} dataSource={users} />
    </Layout>
  );
};

export default Users;
