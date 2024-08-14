import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import "./App.css";
import Login from "./Login";
import Posts from "./Posts";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Users from "./Users";
import Update from "./Update";
import CreateUser from "./CreateUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Users" element={<Users />} />
          <Route path="Users/:id" element={<Update />} />
          <Route path="Users/CreateUser" element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
