import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/resetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  const token = localStorage.getItem("token");

  // check isAuth
  React.useEffect(() => {
    if (isAuth && token) {
      navigate("/");
    }
  }, []);

  return (
    <div id="page-reset-password">
      <div className="row">
        {/* <!-- left side --> */}
        <div className="col-lg-6 col-12">
          <LeftSideAuth />
        </div>

        {/* <!-- right side --> */}
        <div className="col-lg-6 col-12 right-side">
          <div className="col-12 section-form-login">
            <div className="col-lg-6 col-8">
              <h1>Forgot Password?</h1>
              <p>
                We just need your registered e-mail address to send your
                password
              </p>
              <form action="verification-code.html">
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="examplexxx@gmail.com"
                  />
                </div>

                <Link to="/verify-reset-password">
                  <button
                    type="button"
                    id="btn-login"
                    className="btn btn-warning"
                  >
                    Send E-mail
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
