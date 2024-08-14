import React, { Component } from "react";
import Header from "./Header";
import "./Home.css";
export default function Home() {
  return (
    <div className="od-bg">
      <Header />

      <div className="od-center">
        <h1>Hello My Friends</h1>
        <p>Welcome to Our Site</p>
      </div>
    </div>
  );
}
