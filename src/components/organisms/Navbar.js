import React from "react";
import "../../styles/components/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [photoProfile, setPhotoProfile] = React.useState("");
  const isAuth = localStorage.getItem("isAuth");

  // set username navbar
  React.useEffect(() => {
    try {
      const decoded = jwt_decode(localStorage.getItem("token"));
      setPhotoProfile(decoded.data.photo);
      setUsername(decoded.data.name);
    } catch (error) {
      // alert(error);
      localStorage.clear();
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    // navbar scroll effect
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
            {isAuth ? (
              <div className="nav-link nav-user">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="me-2 mx-auto"
                      src={photoProfile}
                      width={"40px"}
                      height={"40px"}
                      alt="profile"
                    />
                    <span>{username}</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li className="">
                      <span
                        className="logout"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/");
                        }}
                      >
                        Keluar
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="nav-link">
                <Link to="/login" className="me-2">
                  <button className="btn">Login</button>
                </Link>
                <Link to="/register" className="">
                  <button className="btn">Register</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
