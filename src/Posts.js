import React, { Component } from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import "./Posts.css";

export default function Posts() {
  const [producets, setProducet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducet(data));
  });
  const myData = producets.map((producet) => {
    return (
      <div key={producet.id} className="od-card">
        <h3 className="od-font-title">{producet.title}</h3>
        <span className="od-font-price">{producet.price}</span>
        <p className="od-font-disc">{producet.description}</p>
        <img src={producet.image} alt="4*4" className="od-width-img" />
      </div>
    );
  });
  return (
    <div>
      <Header />
      {loading ? <p className="od-wating">please wating...</p> : myData}
    </div>
  );
}
