import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import "../../styles/recipes/add.css";
import Swal from "sweetalert2";
import FormRecipe from "../../components/molecules/FormRecipe";

function AddRecipe() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
  }, []);

  return (
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
  );
}

export default AddRecipe;
