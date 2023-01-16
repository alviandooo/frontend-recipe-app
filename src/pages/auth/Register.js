import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/register.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isAgree, setIsAgree] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");

  const user = useSelector((state) => state.auth);

  // get local storage
  const isAuth = user.isLogin;

  const register = () => {
    if (!isAgree) {
      alert("You must be agree with terms & condition!");
    } else {
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}/auth/register`, {
          name,
          email,
          phone,
          password,
          matchPassword,
        })
        .then((response) => {
          setIsError(false);
          setIsSuccess(true);
          setSuccessMsg("You have successfully register!");
          alert("You have successfully register!!");
          navigate("/login");
        })
        .catch((error) => {
          setIsError(true);
          setIsSuccess(false);
          setErrorMsg(error.response.data.message);
        });
    }
  };

  // check isAuth
  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div id="page-register">
      <div className="row">
        <div className="col-lg-6 col-12">
          <LeftSideAuth />
        </div>
        <div className="col-lg-6 col-12 right-side">
          <div className="col-12 section-form-register">
            <div>
              <h1>Let's Get Started !</h1>
              <p>Create new account to access all features</p>

              {isSuccess ? (
                <div className="alert alert-success" role="alert">
                  {" "}
                  {successMsg}{" "}
                </div>
              ) : null}

              {isError ? (
                <div className="alert alert-danger" role="alert">
                  {" "}
                  {errorMsg}{" "}
                </div>
              ) : null}

              <form style={{ borderTop: "2px solid #f5f5f5" }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-mail address*
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    id="phone"
                    placeholder="08xxxxxxx"
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="new-password" className="form-label">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="new_password"
                    id="new-password"
                    placeholder="Create New Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    onChange={(event) => {
                      setMatchPassword(event.target.value);
                    }}
                  />
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agree"
                    onChange={(event) => {
                      setIsAgree(event.target.checked);
                    }}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree to terms & conditions
                  </label>
                </div>

                <button
                  type="button"
                  id="btn-register"
                  className="btn btn-warning"
                  onClick={register}
                >
                  Register
                </button>
              </form>

              <p className="login">
                Already have account? <Link to="/login"> Log in Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
