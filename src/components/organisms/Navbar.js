import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  React.useEffect(() => {
    let element = document.querySelector("#navbar");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        element.style.background = "#efc81a";
      } else {
        element.style.background = "";
      }
    });
  });
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/add-recipe" className="nav-link">
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
            <a href="login.html" className="nav-link me-2">
              <button className="btn">Login</button>
            </a>
            <a href="register.html" className="nav-link">
              <button className="btn">Register</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
