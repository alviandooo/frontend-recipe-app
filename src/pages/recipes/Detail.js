import React from "react";
import Swal from "sweetalert2";
import "../../styles/recipes/detail.css";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Detail() {
  // mengambil redux data recipe
  const { data, id } = useSelector((state) => state.recipe);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const isOwnUser = auth?.id === data?.recipe?.[0]?.user_id;

  const deleteRecipe = () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${auth?.token}`,
      },
    };

    axios
      .delete(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/delete/${
          id || data?.recipe?.[0]?.id
        }`,
        config
      )
      .then((res) => {
        Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Deleted!", "Your recipe can't deleted.", "error");
      });
  };

  return (
    <div>
      <Navbar />
      {/* <!-- section-recipe --> */}
      <section id="recipe">
        <div className="container">
          <div className="row mb-5">
            <div className="title text-center">
              <h2>{data?.recipe?.[0]?.title}</h2>
              <img
                src={data?.recipe?.[0]?.photo}
                width="500px"
                alt="Loream Sandwich"
              />
            </div>
          </div>

          {isOwnUser && (
            <div className="row justify-content-center gap-3 mb-5">
              <button
                className="btn btn-warning"
                style={{ width: "150px" }}
                onClick={() => {
                  navigate(`/edit/${id || data?.recipe?.[0]?.id}`);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "150px" }}
                onClick={() => {
                  Swal.fire({
                    title: "Anda yakin?",
                    text: "Anda ingin menghapus Recipe ini?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteRecipe();
                    }
                  });
                }}
              >
                Hapus
              </button>
            </div>
          )}

          <div className="row content">
            <div className="col-10">
              <div className="ingredients mb-4">
                <h3>Ingredients</h3>
                <p>{data?.recipe?.[0]?.ingredients}</p>
              </div>

              <div className="videos mb-5">
                <h3>Video Step</h3>
                {data?.videos?.map((item, key) => {
                  return (
                    <>
                      <div key={key} className="mb-3">
                        <a
                          href={item?.video}
                          target="_blank"
                          className="btn btn-warning"
                        >
                          Step {key + 1}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="comment">
                <div className="text-center">
                  <form action="">
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Comment :"
                    ></textarea>
                  </form>
                  <button className="btn btn-warning mt-3">Send</button>
                </div>

                <div className="list-comment mt-5">
                  <h3>Comment</h3>
                  <div className="comment-user mt-4">
                    <div className="row">
                      <div className="col-lg-1 col-3">
                        <img
                          src="/images/user-comment.webp"
                          alt="profile-user"
                        />
                      </div>
                      <div className="col-lg-11 col-9 description-comment">
                        <h5>
                          <b>Ayudia</b>
                        </h5>
                        <p>Nice recipe. simple and delicious, thankyou</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end-section-recipe --> */}

      <Footer />
    </div>
  );
}

export default Detail;
