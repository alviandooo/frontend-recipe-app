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

function Home() {
  const [recipes, setRecipes] = React.useState([]);
  const [newRecipes, setNewRecipes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [errorSearch, setErrorSearch] = useState(false);
  const [errorSearchMsg, setErrorSearchMsg] = useState(
    "There is no result! please try again with another keyword"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get search recipe
  const getSearchRecipe = () => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/data/search?keyword=${search}&searchBy=title`
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
    // get new recipe
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc`
      )
      .then(({ data }) => {
        setNewRecipes(data?.data?.[0]);
      })
      .catch((error) => {
        alert("gagal mendapatkan data");
      })
      .finally(() => {
        setIsLoading(false);
      });

    // get popular recipe
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc&page=${currentPage}&limit=6`
      )
      .then(({ data }) => {
        setRecipes(data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
      })
      .catch((error) => {
        alert("gagal mendapatkan data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const fetchPaginationRecipes = (positionPage) => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc&page=${positionPage}&limit=6`
      )
      .then(({ data }) => {
        setRecipes(data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
        setCurrentPage(positionPage);
      })
      .catch((error) => {
        alert("gagal mendapatkan data");
      });
  };

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
                className="form-control form-control-lg"
                placeholder="Search Recipe..."
                id="search-recipe"
                onChange={(event) => {
                  setSearch(event.target.value);
                  getSearchRecipe(event.target.value);
                }}
              />
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

        <div className="container">
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
                <div key={key} className="col-lg-6 col-6 mb-md-4">
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
          <h2 className="title">Popular Recipe</h2>

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
              recipes?.data?.map((item, key) => (
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
                  onClick={() => fetchPaginationRecipes(currentPage - 1)}
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
                      onClick={() => fetchPaginationRecipes(page)}
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
                  onClick={() => fetchPaginationRecipes(currentPage + 1)}
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
