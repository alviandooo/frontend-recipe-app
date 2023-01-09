import React from "react";
import { Link } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/login.css";

function Login() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <LeftSideAuth />
        </div>

        {/* <!-- right side --> */}
        <div className="col-lg-6 col-12 right-side">
          <div className="col-12 section-form-login">
            <div className="col-9 col-lg-6">
              <h1>Welcome</h1>
              <p>Log in into your existing account</p>
              <form style={{ borderTop: "2px solid #f5f5f5" }}>
                <div className="form-group">
                  <label for="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="examplexxx@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agree"
                  />
                  <label className="form-check-label" for="agree">
                    I agree to terms & conditions
                  </label>
                </div>

                <Link to="/">
                  <button
                    type="button"
                    id="btn-login"
                    className="btn btn-warning"
                  >
                    Log in
                  </button>
                </Link>
              </form>

              <div className="col-12 text-end">
                <Link to="" className="forgot-password">
                  Forgot Password ?
                </Link>
              </div>

              <p className="sign-up">
                Don’t have an account?
                <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
