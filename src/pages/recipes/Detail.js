import React from "react";
import "../../styles/recipes/detail.css";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { data, id } = useSelector((state) => state.recipe);

  return (
    <div>
      <Navbar />
      {/* <!-- section-recipe --> */}
      <section id="recipe">
        <div className="container">
          <div className="row mb-5">
            <div className="title text-center">
              <h2>{data?.title}</h2>
              <img src={data?.photo} width="500px" alt="Loream Sandwich" />
            </div>
          </div>

          <div className="row content">
            <div className="col-10">
              <div className="ingredients mb-4">
                <h3>Ingredients</h3>
                <p>{data?.ingredients}</p>
              </div>

              <div className="videos mb-5">
                <h3>Video Step</h3>
                <div className="mb-3">
                  <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#video-step-modal"
                  >
                    Step 1
                  </button>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#video-step-modal"
                  >
                    Step 2
                  </button>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#video-step-modal"
                  >
                    Step 3
                  </button>
                </div>
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

      {/* <!-- modal-video-step --> */}
      <div
        className="modal fade"
        id="video-step-modal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{ height: "90vh" }}>
            <div className="modal-body">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7K4LpJlVj84"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end-modal-video-step --> */}
      <Footer />
    </div>
  );
}

export default Detail;
