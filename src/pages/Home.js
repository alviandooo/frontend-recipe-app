import Navbar from "../components/Navbar";
import "../styles/home.css";
import "../styles/footer.css";

function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* end-navbar */}
      {/* <!-- header --> */}
      <section id="header">
        {/* <!-- overlay background --> */}
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
                src="./images/home-recipe.webp"
                className="image-1"
                alt="plate-recipe"
                width="600px"
              />
              <img
                src="./images/home-recipe-2.webp"
                className="image-2"
                alt="vegetable-recipe"
                width="500px"
              />
              <img
                src="./images/home-recipe-3.webp"
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
                src="./images/new-recipe.webp"
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
              <a
                href="detail-recipe.html"
                className="btn btn-lg btn-learn-more"
              >
                Learn More
              </a>
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
            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-1.webp"
                  width="100%"
                  height="100%"
                  alt="chicken kare"
                />
                <h2 className="image-title">Chicken Kare</h2>
              </div>
            </div>

            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-2.webp"
                  width="100%"
                  height="100%"
                  alt="Bomb Chicken"
                />
                <h2 className="image-title">Bomb Chicken</h2>
              </div>
            </div>

            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-3.webp"
                  width="100%"
                  height="100%"
                  alt="Banana Smothie Pop"
                />
                <h2 className="image-title">Banana Smothie Pop</h2>
              </div>
            </div>

            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-4.webp"
                  width="100%"
                  height="100%"
                  alt="Coffe Lava Cake"
                />
                <h2 className="image-title">Coffe Lava Cake</h2>
              </div>
            </div>

            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-5.webp"
                  width="100%"
                  height="100%"
                  alt="Sugar Salmon"
                />
                <h2 className="image-title">Sugar Salmon</h2>
              </div>
            </div>

            <div className="col-lg-4 col-6 mb-md-4">
              <div className="clickable-image">
                <img
                  src="./images/popular-recipe-6.webp"
                  width="100%"
                  height="100%"
                  alt="Indian Salad"
                />
                <h2 className="image-title">Indian Salad</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end title --> */}
      </section>
      {/* <!-- end popular recipe --> */}

      {/* <!-- footer --> */}
      <footer>
        <div className="footer">
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>
          <div className="footer-link">
            <p>
              &copy Copyright 2022 by M Restu Alviando. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* end-footer */}
    </div>
  );
}

export default Home;
