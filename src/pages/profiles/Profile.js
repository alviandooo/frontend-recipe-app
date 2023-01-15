import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import "../../styles/profiles/profile.css";
import CardRecipe from "../../components/molecules/CardRecipe";

function Profile() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (!isAuth || !token) {
      navigate("/login");
    }
  }, []);

  const myRecipes = [
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
  ];

  const savedRecipes = [
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
  ];

  const likedRecipes = [
    {
      id: 7,
      title: "Indian Salad",
      src: "/images/popular-recipe-6.webp",
    },
  ];

  const changeProfile = () => {
    let elementName = document.querySelector(".profile-name");
    let elementChangeProfile = document.querySelector(".change-profile");
    let checkDisplay = elementChangeProfile.style.display === "block";
    if (checkDisplay) {
      elementChangeProfile.style.display = "none";
      elementName.style.display = "block";
    } else {
      elementChangeProfile.style.display = "block";
      elementName.style.display = "none";
    }
  };

  return (
    <div>
      <Navbar />
      {/* <!-- content --> */}
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="profile">
              <div className="profile-photo">
                <img
                  src="./images/profile-user.webp"
                  className="rounded-circle"
                  width="120px"
                  alt=""
                />
                <a href="#/" onClick={changeProfile}>
                  <img
                    src="./images/icon-edit.webp"
                    alt=""
                    className="icon-edit"
                  />
                </a>
              </div>
              <div className="profile-name mt-2">
                <p>Garneta Sharina</p>
              </div>
              <div className="change-profile mt-4">
                <div className="btn-group-vertical">
                  <button className="btn btn-secondary">
                    Change Profile Photo
                  </button>
                  <button className="btn btn-secondary">Change Password</button>
                </div>
              </div>
            </div>

            <div className="tab-profile mb-5">
              <ul className="nav" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    href="#/"
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-my-recipe"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    My Recipe
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#/"
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-saved-recipe"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Saved Recipe
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#/"
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-liked-recipe"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Liked Recipe
                  </a>
                </li>
              </ul>
              <hr />
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-my-recipe"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    {myRecipes.map((item, key) => (
                      <div
                        key={key}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 p-0 list-recipe"
                      >
                        <Link
                          to={`/detail/${item.id}`}
                          className="btn btn-lg btn-learn-more"
                        >
                          <CardRecipe title={item.title} imageSrc={item.src} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-saved-recipe"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    {savedRecipes.map((item, key) => (
                      <div
                        key={key}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 p-0 list-recipe"
                      >
                        <Link
                          to={`/detail/${item.id}`}
                          className="btn btn-lg btn-learn-more"
                        >
                          <CardRecipe title={item.title} imageSrc={item.src} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-liked-recipe"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    {likedRecipes.map((item, key) => (
                      <div
                        key={key}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 p-0 list-recipe"
                      >
                        <Link
                          to={`/detail/${item.id}`}
                          className="btn btn-lg btn-learn-more"
                        >
                          <CardRecipe title={item.title} imageSrc={item.src} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end-content --> */}
      <Footer />
    </div>
  );
}

export default Profile;
