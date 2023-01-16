import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/resetPassword.css";

function VerificationResetPassword() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth);

  // get local storage
  const isAuth = user.isLogin;

  // check isAuth
  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div id="verify-page-reset-password">
      <div className="row">
        {/* <!-- left side --> */}
        <div className="col-lg-6 col-12">
          <LeftSideAuth />
        </div>

        {/* <!-- right side --> */}
        <div className="col-lg-6 col-12 right-side">
          <div className="col-12 section-form-login">
            <div className="col-6">
              <p>We just need 6 digit code from your e-mail</p>
              <form>
                <div className="form-group">
                  <label htmlFor="code" className="form-label">
                    Code 6 digit
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="code"
                    id="code"
                    placeholder=""
                  />
                </div>

                <Link to="/">
                  <button
                    type="button"
                    id="btn-login"
                    className="btn btn-warning"
                  >
                    Reset Password
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

export default VerificationResetPassword;
