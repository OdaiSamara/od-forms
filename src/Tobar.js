import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function Tobar() {
  return (
    <div>
      <div className="od-to-tobar">
        <h1>Store</h1>
        <Link to="/" className="od-bgBtn od-bgBtnn">
          Go to Web Site
        </Link>
      </div>
    </div>
  );
}


