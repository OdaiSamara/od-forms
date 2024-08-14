import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  function handelLogOut() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    window.location.pathname = "/";
  }
  return (
    <div>
      <div className="od-header">
        <div>
          <ul className="od-style-ul">
            <Link className="od-link" to="/">
              Home
            </Link>
            <Link className="od-link" to="/Posts">
              Posts
            </Link>
            <Link className="od-link" to="/Dashboard">
              Controal
            </Link>
          </ul>
        </div>
        {window.localStorage.getItem("username") ? (
          <div onClick={handelLogOut} className="od-bgBtn od-bgBtnn">
            Logout
          </div>
        ) : (
          <Link className="od-bgBtn od-bgBtnn" to="/Login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
