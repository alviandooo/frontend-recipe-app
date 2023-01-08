import React from "react";
import "../styles/Maintenance.css";

function Maintenance() {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-white"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <img
          src="./images/maintenance.png"
          className="image-1"
          alt="plate-recipe"
          width="500px"
        />
        <h1>Page under maintenance!</h1>
      </div>
    </div>
  );
}

export default Maintenance;
