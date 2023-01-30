import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import "../../styles/auth/login.css";
import * as authReducer from "../../store/auth/index";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isAgree, setIsAgree] = React.useState(false);

  const user = useSelector((state) => state.auth);

  // get local storage
  const isAuth = user.isLogin;

  const dispatch = useDispatch();

  const login = () => {
    if (!isAgree) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "You must be agree with terms & condition!",
      });
    } else {
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
          email,
          password,
        })
        .then((response) => {
          // save to redux
          dispatch(
            authReducer.setAuth({
              data: response?.data?.data,
              id: response?.data?.data?.id,
              token: response?.data?.jwt_token,
              isLogin: true,
            })
          );
          setIsError(false);
          Swal.fire({
            icon: "success",
            title: "Login is successfully!",
          });
          navigate("/");
        })
        .catch((error) => {
          // console.log(error.response.data.message);
          setIsError(true);
          setErrorMsg(error.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
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
    <div id="page-login">
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

              {!isError ? null : (
                <div className="alert alert-danger" role="alert">
                  {" "}
                  {errorMsg}{" "}
                </div>
              )}

              <form style={{ borderTop: "2px solid #f5f5f5" }}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="examplexxx@gmail.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
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
                  id="btn-login"
                  className="btn btn-warning"
                  onClick={login}
                >
                  {!isLoading ? (
                    "Log in"
                  ) : (
                    <div class="spinner-border text-light" role="status"></div>
                  )}
                </button>
              </form>

              <div className="col-12 text-end">
                <Link to="/reset-password" className="forgot-password">
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
