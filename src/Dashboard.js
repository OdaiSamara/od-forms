import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Tobar from "./Tobar";

export default function Dashboard() {
  return (
    <div>
      <Tobar />
      <div className="od-flex">
        <Sidebar />
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
