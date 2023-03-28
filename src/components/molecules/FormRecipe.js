import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/recipes/add.css";
import Swal from "sweetalert2";

function FormRecipe() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");
  const [editPage, setEditPage] = useState(false);

  const user = useSelector((state) => state.auth);
  const data = useSelector((state) => state.recipe);

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

  const updateRecipe = () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    };

    let dataPost = new FormData();
    dataPost.append("photo", photo);
    dataPost.append("title", title);
    dataPost.append("description", description);
    dataPost.append("ingredients", ingredients);
    dataPost.append("video", video);

    axios
      .patch(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/update/${data?.data?.recipe?.[0]?.id}`,
        dataPost,
        config
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: `${response.data.message}`,
        });
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
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
    const pathname = window.location.pathname;
    const segment = pathname.split("/");
    const isEdit = segment?.[1] == "edit";

    if (isEdit) {
      setEditPage(true);
      setTitle(data?.data?.recipe?.[0]?.title);
      setDescription(data?.data?.recipe?.[0]?.description);
      setIngredients(data?.data?.recipe?.[0]?.ingredients);
      setVideo(data?.data?.videos?.[0]?.video);
      setPhoto(data?.data?.recipe?.[0]?.photo);
    } else {
      setTitle("");
      setDescription("");
      setIngredients("");
      setVideo("");
      setPhoto("");
    }
  }, []);

  return (
    <div className="form-add-recipe col-lg-8 text-center">
      <div style={{ textAlign: "left" }}>
        <div className="form-group">
          <label className="label mb-1">Foto :</label>
          <input
            type="file"
            className="form-control"
            onChange={(event) => {
              setPhoto(event.target.files[0]);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label mb-1">Title :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label mb-1">Decription / Slogan :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label mb-1">Ingredients :</label>
          <textarea
            value={ingredients}
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
          <small style={{ marginTop: "-20px" }}>
            *gunakan tanda koma ( , ) sebagai pemisah antar bahan
          </small>
        </div>
        <div className="form-group">
          <label className="label mb-1">Video :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Video"
            value={video}
            onChange={(event) => {
              setVideo(event.target.value);
            }}
          />
        </div>
        {!isLoading ? (
          <button
            className="btn btn-warning"
            onClick={() => {
              switch (editPage) {
                case true:
                  updateRecipe();
                  break;
                case false:
                  addRecipe();
              }
            }}
          >
            {editPage === true ? "Update" : "Tambah"}
          </button>
        ) : (
          <button className="btn btn-warning">
            <div class="spinner-border text-light" role="status"></div>
          </button>
        )}
      </div>
    </div>
  );
}

export default FormRecipe;
