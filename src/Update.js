import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Update() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  const [accebt, setAccebt] = useState(false);
  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);
  async function handelSubmit(e) {
    let flag = true;

    e.preventDefault();
    setAccebt(true);

    if (info.name === "" || info.email === "") {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.put(
          `https://api.escuelajs.co/api/v1/users/${id}`,
          {
            name: info.name,
            email: info.email,
          }
        );
        if (res.status === 200) {
          window.location.pathname = "/Dashboard/Users";
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="od-form-center">
      <form onSubmit={handelSubmit}>
        {accebt === 400 && (
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
          type="email"
          value={info.email}
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
          placeholder="Please Enter email"
        />
        {info.email === "" && accebt && (
          <p className="od-ps">
            <span>X</span>please enter email
          </p>
        )}

        <button className="od-bgBtn">Update</button>
      </form>
    </div>
  );
}
