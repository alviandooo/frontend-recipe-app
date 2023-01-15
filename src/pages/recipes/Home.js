import Navbar from "../../components/organisms/Navbar";
import "../../styles/home.css";
import Footer from "../../components/organisms/Footer";
import CardRecipe from "../../components/molecules/CardRecipe";
import { Link } from "react-router-dom";
import React from "react";

const popularRecipes = [
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

function Home() {
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
                src="/images/new-recipe.webp"
                className="image-new-recipe"
                width="500px"
                alt="new-recipe"
              />
            </div>

            <div className="col-lg-5 offset-1 description-recipe">
              <h2 className="description">
                Healthy Bone Broth <br />
                Ramen (Quick & Easy)
              </h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- <br />
                Healthy chicken ramen in a hurry? That’s right!
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
            {popularRecipes.map((item, key) => (
              <div key={key} className="col-lg-4 col-6 mb-md-4 p-0">
                <Link
                  to={`detail/${item.id}`}
                  className="btn btn-lg btn-learn-more"
                >
                  <CardRecipe title={item.title} imageSrc={item.src} />
                </Link>
              </div>
            ))}
          </div>
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
