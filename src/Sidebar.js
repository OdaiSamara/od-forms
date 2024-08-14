import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="od-sidebar">
      <Link to="/Dashboard/Users" className="od-items">
        Users
      </Link>
      <Link to="/Dashboard/Users/CreateUser" className="od-items">
        NewUser
      </Link>
    </div>
  );
}
