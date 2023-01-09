import React from "react";
import { Link } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/register.css";

function Register() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <LeftSideAuth />
        </div>
        <div className="col-lg-6 col-12 right-side">
          <div className="col-12 section-form-register">
            <div>
              <h1>Let's Get Started !</h1>
              <p>Create new account to access all features</p>
              <form style={{ borderTop: "2px solid #f5f5f5" }}>
                <div className="form-group">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email" className="form-label">
                    E-mail address*
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <label for="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    id="phone"
                    placeholder="08xxxxxxx"
                  />
                </div>
                <div className="form-group">
                  <label for="new-password" className="form-label">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="new_password"
                    id="new-password"
                    placeholder="Create New Password"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="New Password"
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
                    id="btn-register"
                    className="btn btn-warning"
                  >
                    Register
                  </button>
                </Link>
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
