import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
export default function Singups() {
  const [info, setInfo] = useState({
    name: "",
    password: "",
  });

  const [accebt, setAccebt] = useState(false);
  const [errorName, setErrorName] = useState("");
  let disblay = false;
  async function handelSubmit(e) {
    let flag = true;
   
    e.preventDefault();
    setAccebt(true);

    if (info.name === "" || info.password.length < 8) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post("https://dummyjson.com/auth/login", {
          username: info.name,
          password: info.password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("username", info.name);
          window.localStorage.setItem("password", info.password);
          window.location.pathname = "/Posts";
        }
      }
    } catch (err) {
      setErrorName(err.request.status);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="od-form-center">
        <form onSubmit={handelSubmit}>
          {accebt && errorName === 400 && (
            <p className="od-ps">
              <span>X</span>please Check username and password
            </p>
          )}
          <label>UserName</label>
          <input
            type="text"
            value={info.name}
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
            placeholder="Please Enter User Name"
          />
          {info.name === "" && accebt && (
            <p className="od-ps">
              <span>X</span>please enter UserName
            </p>
          )}

          <label>Password</label>
          <input
            type="password"
            value={info.password}
            onChange={(e) => {
              setInfo({ ...info, password: e.target.value });
            }}
            placeholder="Please Enter Password"
          />
          {info.password.length < 8 && accebt && (
            <p className="od-ps">
              <span>X</span> please enter 8 charset
            </p>
          )}

          <button
            disabled={
              info.name === "" || info.password.length < 8
                ? disblay === false
                : disblay === true
            }
            className={
              info.name === "" || info.password.length < 8
                ? "od-Btn"
                : "od-bgBtn"
            }
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}
