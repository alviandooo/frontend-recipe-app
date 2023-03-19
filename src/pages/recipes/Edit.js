import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import FormRecipe from "../../components/molecules/FormRecipe";

function Edit() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "Recipe Food | Edit Recipe";
    if (!user.isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div id="add-recipe">
        <Navbar />
        {/* <!-- content --> */}
        <section id="content">
          <div className="row content-item align-items-center">
            <FormRecipe />
          </div>
        </section>
        {/* <!-- end-content --> */}

        <Footer />
      </div>
    </>
  );
}

export default Edit;
