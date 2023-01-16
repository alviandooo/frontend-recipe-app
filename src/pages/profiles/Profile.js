import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import "../../styles/profiles/profile.css";
import CardRecipe from "../../components/molecules/CardRecipe";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as authReducer from "../../store/auth";
import ProfileHeader from "../../components/molecules/ProfileHeader";
import ProfileRecipeTab from "../../components/molecules/ProfileRecipeTab";

function Profile() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const update = () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const bodyParameters = {
      photo,
      name: name === "" ? user.data.name : name,
    };

    axios
      .patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/edit/${user.data.id}`,
        bodyParameters,
        config
      )
      .then((response) => {
        alert(response.data.message);
        dispatch(
          authReducer.setAuth({
            data: response?.data?.data?.[0],
            id: user.id,
            token: user.token,
            isLogin: true,
          })
        );
        resetInput();
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.status === 401) {
          localStorage.removeItem("persist:root");
          navigate("/login");
        } else {
          alert(`ERROR : ${error.response.data.message}`);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetInput = () => {
    let input = document.querySelector("input");
    input.value = "";
  };

  React.useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      {/* <!-- content --> */}
      <section id="content">
        <div className="container">
          <div className="row">
            <ProfileHeader />
            <ProfileRecipeTab />
          </div>
        </div>
      </section>
      {/* <!-- end-content --> */}
      <Footer />

      {/* <!-- Modal --> */}
      <div
        className="modal"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Change Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div clas="form-group">
                <label className="label mb-1">Photo :</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(event) => {
                    setPhoto(event.target.files[0]);
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <label className="label mb-1">Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={user?.data?.name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              {!isLoading ? (
                <div>
                  <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={resetInput}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                    onClick={resetInput}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={update}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary btn-sm">
                  <div
                    className="spinner-border text-light"
                    role="status"
                  ></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
