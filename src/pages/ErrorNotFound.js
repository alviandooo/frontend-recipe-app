import React from "react";
import { Outlet } from "react-router-dom";
import ImageSinglePage from "../components/molecules/ImageSinglePage";
import "../styles/Maintenance.css";

function ErrorNotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-white"
      style={{ height: "100vh" }}
    >
      <ImageSinglePage
        title={"Page Not Found!"}
        src={"/images/error-not-found-page.png"}
        alt={"page-not-found"}
      />
    </div>
  );
}

export default ErrorNotFound;
