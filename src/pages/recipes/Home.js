import Navbar from "../../components/organisms/Navbar";
import "../../styles/home.css";
import Footer from "../../components/organisms/Footer";
import CardRecipe from "../../components/molecules/CardRecipe";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

function Home() {
  const [recipes, setRecipes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);

  // get recipe data
  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=id&typeSort=desc&page=${currentPage}&limit=6`
      )
      .then(({ data }) => {
        setRecipes(data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
      })
      .catch((error) => {
        console.log(error);
        alert("gagal mendapatkan data");
      });
  }, []);

  const fetchPaginationRecipes = (positionPage) => {
    console.log("Position ", positionPage);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=id&typeSort=desc&page=${positionPage}&limit=6`
      )
      .then(({ data }) => {
        console.log(data);
        setRecipes(data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
        setCurrentPage(positionPage);
      })
      .catch((error) => {
        console.log(error);
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
      <section id="new-recipe">
        {/* <!-- overlay background --> */}
        <div className="overlay-background"></div>

        {/* <!-- title --> */}
        <div className="container">
          <h2 className="title">New Recipe</h2>
        </div>

        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- left side --> */}
            <div className="col-lg-6">
              <img
                src={recipes?.data?.[0].photo ?? "/images/new-recipe.webp"}
                className="image-new-recipe"
                width="500px"
                alt="new-recipe"
              />
            </div>

            <div className="col-lg-5 offset-1 description-recipe">
              <h2 className="description">
                {recipes?.data?.[0]?.title ?? "Recipe Kosong"}
              </h2>
              <p>
                {recipes?.data?.[0]?.description ?? "Description Recipe Kosong"}
              </p>
              <Link to={"detail/1"} className="btn btn-lg btn-learn-more">
                Learn More
              </Link>
            </div>
          </div>
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
            {recipes?.data?.map((item, key) => (
              <div key={key} className="col-lg-4 col-6 mb-md-4 p-0">
                <Link
                  to={`detail/${item.id}`}
                  className="btn btn-lg btn-learn-more"
                >
                  <CardRecipe title={item.title} imageSrc={item.photo} />
                </Link>
              </div>
            ))}
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

              {[...new Array(totalPage)].map((item, key) => {
                key++;
                return (
                  <li key={key} className="page-item">
                    <a
                      className="page-link"
                      onClick={() => fetchPaginationRecipes(key)}
                    >
                      {key}
                    </a>
                  </li>
                );
              })}
              <li
                className={`page-item ${
                  currentPage === totalPage ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  onClick={() => fetchPaginationRecipes(currentPage + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
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
