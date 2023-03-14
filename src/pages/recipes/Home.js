import Navbar from "../../components/organisms/Navbar";
import "../../styles/home.css";
import Footer from "../../components/organisms/Footer";
import CardRecipe from "../../components/molecules/CardRecipe";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/recipe";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  const [recipes, setRecipes] = React.useState([]);
  const [newRecipes, setNewRecipes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [errorSearch, setErrorSearch] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = React.useState(["created_at", "desc"]);

  // get search recipe
  const getSearchRecipe = (keyword) => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/data/search?keyword=${keyword}&searchBy=title`
      )
      .then((res) => {
        setErrorSearch(false);
        setDataSearch(res?.data?.data);
      })
      .catch((err) => {
        // console.log(err);
        setErrorSearch(true);
      })
      .finally(() => {
        // setErrorSearch(false);
        // setDataSearch([]);
      });
  };

  React.useEffect(() => {
    setIsLoading(true);

    const fetchNewRecipe = axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc`
    );

    const fetchPopularRecipe = axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc&page=${currentPage}&limit=6`
    );

    Promise.all([fetchNewRecipe, fetchPopularRecipe])
      .then((res) => {
        // console.log(res[1].data.data);

        // set new recipe
        setNewRecipes(res?.[0]?.data?.data?.[0]);

        // set popular recipes
        setRecipes(res?.[1]?.data?.data);

        // set total pagination popular recipes
        setTotalPage(
          Math.ceil(res?.[1]?.data?.total_all_data / res?.[1]?.data?.limit)
        );
      })
      .catch((err) => {
        console.log(`error : ${err}`);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Cannot get data from server!",
          showCancelButton: false,
          showCloseButton: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const fetchPaginationRecipes = (positionPage) => {
    setIsLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=${sortBy[0]}&typeSort=${sortBy[1]}&page=${currentPage}&limit=6`
      )
      .then(({ data }) => {
        setIsLoading(false);
        setRecipes(data?.data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
        setCurrentPage(positionPage);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Cannot get data from server!",
          showCancelButton: false,
          showCloseButton: false,
        });
      });
  };

  React.useEffect(() => {
    setIsLoading(true);
    // get popular recipe
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=${sortBy[0]}&typeSort=${sortBy[1]}&page=${currentPage}&limit=6`
      )
      .then(({ data }) => {
        setRecipes(data?.data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Cannot get data from server!",
          showCancelButton: false,
          showCloseButton: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sortBy, currentPage]);

  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* end-navbar */}
      {/* <!-- header --> */}
      <section id="header">
        {/* <!-- overlay background -->  */}
        <div className="overlay-background"></div>

        <div className="container">
          <div className="row align-items-center">
            {/* <!-- left side --> */}
            <div className="col-lg-5 order-1 order-lg-0">
              <h1>
                Discover Recipe <br />& Delicious Food
              </h1>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                placeholder="Search Recipe..."
                id="search-recipe"
                onChange={(event) => {
                  setSearch(event.target.value);
                  getSearchRecipe(event.target.value);
                }}
              />
              {search && (
                <a href="#search" className="text-dark">
                  Lihat hasil pencarian
                </a>
              )}
            </div>

            {/* <!-- right side --> */}
            <div className="col-lg-6 offset-1 right-side order-0 order-lg-1">
              <img
                src="/images/home-recipe.webp"
                className="image-1"
                alt="plate-recipe"
                width="600px"
              />
              <img
                src="/images/home-recipe-2.webp"
                className="image-2"
                alt="vegetable-recipe"
                width="500px"
              />
              <img
                src="/images/home-recipe-3.webp"
                className="image-3"
                width="500px"
                alt="polkadot-recipe"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end header --> */}

      {/* <!-- new recipe --> */}
      <section
        id="new-recipe"
        className={errorSearch || search ? "mb-min-200" : ""}
      >
        <div
          className={
            !search ? "overlay-background" : "overlay-background d-none"
          }
        ></div>
        <div className="container" id="search">
          <h2 className="title">
            {!search ? "New Recipe" : `Search result for ${search}`}
          </h2>
        </div>
        <div className="container">
          {!search ? (
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src={
                    newRecipes?.photo ??
                    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  }
                  className="image-new-recipe"
                  width="500px"
                  height="500px"
                  alt="new-recipe"
                />
              </div>

              <div className="col-lg-5 offset-1 description-recipe">
                {isLoading ? (
                  <p className="placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                  </p>
                ) : (
                  <div>
                    <h2 className="description">
                      {newRecipes?.title ?? "Recipe Kosong"}
                    </h2>
                    <p>
                      {newRecipes?.description ?? "Description Recipe Kosong"}
                    </p>
                    <div
                      className="btn btn-lg btn-learn-more"
                      onClick={() => {
                        axios
                          .get(
                            `${process.env.REACT_APP_URL_BACKEND}/recipes/${newRecipes?.id}`
                          )
                          .then((response) => {
                            dispatch(
                              recipeReducer.setRecipe({
                                data: recipes?.data?.[0],
                                id: newRecipes?.id,
                              })
                            );
                            navigate(`/detail/${newRecipes?.id}`);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }}
                    >
                      Learn More
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : errorSearch ? (
            <div className="row text-center">
              <p>There is no recipe, please try again!</p>
            </div>
          ) : (
            <div className="row align-items-center">
              {dataSearch.map((item, key) => (
                <div key={key} className="col-lg-4 col-6 mb-md-4">
                  <CardRecipe
                    title={item.title}
                    imageSrc={item.photo}
                    recipeId={item.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <!-- end title --> */}
      </section>
      {/* <!-- end new recipe --> */}

      {/* <!-- popular recipe --> */}
      <section id="popular-recipe">
        {/* <!-- overlay background --> */}
        {/* <!-- <div className="overlay-background"></div> --> */}

        <div className="container">
          {/* <!-- title --> */}
          <div className="row d-flex justify-content-center align-items-center mb-5 mt-5">
            <div className="col-lg-10 ">
              <h2 className="title float-start">Popular Recipe</h2>
            </div>
            <div className="col-lg-2">
              <select
                className="form-control float-end"
                onChange={(event) => {
                  const value = event.target.value;
                  if (value === "1" || value === "0") {
                    // Newest
                    setSortBy(["created_at", "desc"]);
                  } else if (value === "2") {
                    // A-Z
                    setSortBy(["title", "-"]);
                  } else if (value === "3") {
                    // Z-A
                    setSortBy(["title", "desc"]);
                  } else {
                    // Oldest
                    setSortBy(["created_at", "asc"]);
                  }
                }}
              >
                <option value="0" selected>
                  Sort by (Default)
                </option>
                <option value="1">Newest</option>
                <option value="2">A-Z</option>
                <option value="3">Z-A</option>
                <option value="4">Oldest</option>
              </select>
            </div>
          </div>

          {/* <!-- content --> */}
          <div className="row">
            {isLoading ? (
              <div className="text-center">
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              recipes?.map((item, key) => (
                <div key={key} className="col-lg-4 col-6 mb-md-4">
                  <CardRecipe
                    title={item.title}
                    imageSrc={item.photo}
                    recipeId={item.id}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* pagination  */}
        <div className="container">
          <nav aria-label="Page navigation example" className="mt-4">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <a
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    fetchPaginationRecipes(currentPage - 1);
                  }}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              {[...new Array(totalPage)].map((item, page) => {
                page++;
                return (
                  <li
                    key={page}
                    className={`page-item ${
                      currentPage === page ? "active" : null
                    }`}
                  >
                    <div
                      className="page-link"
                      onClick={() => {
                        setCurrentPage(page);
                        fetchPaginationRecipes(page);
                      }}
                    >
                      {page}
                    </div>
                  </li>
                );
              })}
              <li
                className={`page-item ${
                  currentPage === totalPage ? "disabled" : ""
                }`}
              >
                <div
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    fetchPaginationRecipes(currentPage + 1);
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- end title --> */}
      </section>
      {/* <!-- end popular recipe --> */}
      {/* footer */}
      <Footer />
      {/* end-footer */}
    </div>
  );
}

export default Home;
