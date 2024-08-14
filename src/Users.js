import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [runEffect, setRunEffect] = useState(0);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [runEffect]); // Only re-fetch on runEffect change
  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <span
          onClick={() => handleDelete(user.id)}
          style={{ color: "red", cursor: "pointer" }}
        >
          Delete
        </span>
        +
        <Link to={`${user.id}`} style={{ color: "#74afb9", cursor: "pointer" }}>
          Update
        </Link>
      </td>
    </tr>
  ));

  async function handleDelete(id) {
    try {
      const res = await axios.delete(
        `https://api.escuelajs.co/api/v1/users/${id}`
      );
      if (res.status === 200) {
        setUsers(users.filter((user) => user.id !== id)); // Remove deleted user
        setRunEffect((prev) => prev + 1); // Update runEffect to trigger re-fetch
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error here (display message, etc.)
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
