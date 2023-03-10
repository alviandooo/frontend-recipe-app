import React from "react";
import ImageSinglePage from "../components/molecules/ImageSinglePage";
import "../styles/Maintenance.css";

function Maintenance() {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-white"
      style={{ height: "100vh" }}
    >
      <ImageSinglePage
        title={"Page under maintenance!"}
        src={"/images/maintenance.png"}
        alt={"page-maintenance"}
      />
    </div>
  );
}

export default Maintenance;
