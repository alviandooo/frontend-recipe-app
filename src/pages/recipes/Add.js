import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import "../../styles/recipes/add.css";
import Swal from "sweetalert2";

function AddRecipe() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");

  const user = useSelector((state) => state.auth);
  const addRecipe = () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    };

    let data = new FormData();
    data.append("photo", photo);
    data.append("title", title);
    data.append("description", description);
    data.append("ingredients", ingredients);
    data.append("video", video);

    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/recipes`, data, config)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: `${response.data.message}`,
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("persist:root");
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <div id="add-recipe">
      <Navbar />
      {/* <!-- content --> */}
      <section id="content">
        <div className="row content-item align-items-center">
          <div className="form-add-recipe col-lg-8 text-center">
            <div style={{ textAlign: "left" }}>
              <div clas="form-group">
                <label className="label mb-1">Foto :</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(event) => {
                    setPhoto(event.target.files[0]);
                  }}
                />
              </div>
              <div clas="form-group">
                <label className="label mb-1">Title :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div clas="form-group">
                <label className="label mb-1">Decription / Slogan :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
              <div clas="form-group">
                <label className="label mb-1">Ingredients :</label>
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Ingredients"
                  onChange={(event) => {
                    setIngredients(event.target.value);
                  }}
                ></textarea>
              </div>
              <div clas="form-group">
                <label className="label mb-1">Video :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Video"
                  onChange={(event) => {
                    setVideo(event.target.value);
                  }}
                />
              </div>
              {!isLoading ? (
                <button className="btn btn-warning" onClick={addRecipe}>
                  Tambah
                </button>
              ) : (
                <button className="btn btn-warning">
                  <div class="spinner-border text-light" role="status"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end-content --> */}

      <Footer />
    </div>
  );
}

export default AddRecipe;
