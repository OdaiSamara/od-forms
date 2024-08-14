import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
export default function CreateUser() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state
  const [errorMessage, setErrorMessage] = useState(""); // Store error message

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    if (info.name === "" || info.email === "" || info.password.length < 5) {
      setErrorMessage(
        "Please fill all fields. Password must be at least 5 characters long."
      );
      return; // Exit if validation fails
    }

    try {
      const res = await axios.post("https://api.escuelajs.co/api/v1/users/", {
        name: info.name,
        password: info.password,
        email: info.email,
      });

      if (res.status === 200) {
        window.location.pathname = "/Dashboard/Users";
      }
    } catch (err) {
      setErrorMessage("Error creating user. Please try again later.");
      console.error(err); // Log error for debugging
    } finally {
      setIsSubmitting(false); // Reset submitting state after request finishes
    }
  }

  return (
    <div className="od-form-center">
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          placeholder="Please Enter User Name"
        />
        {info.name === "" &&
          isSubmitting && ( // Show error only on submit
            <p className="od-ps">
              <span>X</span> Please enter UserName
            </p>
          )}
        <label>Email</label>
        <input
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          placeholder="Please Enter User Name"
        />
        {info.email === "" &&
          isSubmitting && ( // Show error only on submit
            <p className="od-ps">
              <span>X</span> Please enter Email
            </p>
          )}
        <label>Password</label>
        <input
          type="password"
          value={info.password}
          onChange={(e) => setInfo({ ...info, password: e.target.value })}
          placeholder="Please Enter Password"
        />
        {info.password.length < 5 &&
          isSubmitting && ( // Show error only on submit
            <p className="od-ps">
              <span>X</span> Password must be at least 5 characters long
            </p>
          )}
        <button
          disabled={info.name === "" || info.password.length < 5}
          className={
            info.name === "" || info.password.length < 5 ? "od-Btn" : "od-bgBtn"
          }
        >
          {isSubmitting ? "Creating..." : "CreateUser"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}
