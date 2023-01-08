import React from "react";
import "../../styles/recipes/detail.css";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { redirect, useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Healthy Bone Broth Ramen (Quick & Easy)",
    src: "/images/new-recipe.webp",
  },
  {
    id: 2,
    title: "Chicken Kare",
    src: "/images/popular-recipe-1.webp",
  },
  {
    id: 3,
    title: "Bomb Chicken",
    src: "/images/popular-recipe-2.webp",
  },
  {
    id: 4,
    title: "Banana Smothie Pop",
    src: "/images/popular-recipe-3.webp",
  },
  {
    id: 5,
    title: "Coffe Lava Cake",
    src: "/images/popular-recipe-4.webp",
  },
  {
    id: 6,
    title: "Sugar Salmon",
    src: "/images/popular-recipe-5.webp",
  },
  {
    id: 7,
    title: "Indian Salad",
    src: "/images/popular-recipe-6.webp",
  },
];

function Detail() {
  const { id } = useParams();
  const index = recipes.findIndex((item) => item.id === parseInt(id));
  const data = recipes[index];

  return (
    <div>
      <Navbar />
      {/* <!-- section-recipe --> */}
      <section id="recipe">
        <div className="container">
          <div className="row mb-5">
            <div className="title text-center">
              <h2>{data?.title}</h2>
              <img src={data?.src} width="500px" alt="Loream Sandwich" />
            </div>
          </div>

          <div className="row content">
            <div className="col-10">
              <div className="ingredients mb-4">
                <h3>Ingredients</h3>
                <ul>
                  <li>2 Eggs</li>
                  <li>2 tbsp mayonnaise</li>
                  <li>3 slices bread</li>
                  <li>a little butter</li>
                  <li>⅓ carton of cress</li>
                  <li>
                    2-3 slices of tomato or a lettuce leaf and a slice of ham or
                    cheese
                  </li>
                  <li>crisps , to serve</li>
                </ul>
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
                <div className="mb-3">
                  <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#video-step-modal"
                  >
                    Step 4
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
        tabindex="-1"
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
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
