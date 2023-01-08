import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import "../../styles/recipes/add.css";

function AddRecipe() {
  return (
    <div>
      <Navbar />

      {/* <!-- content --> */}
      <section id="content">
        <div className="row content-item align-items-center">
          <div className="form-add-recipe col-lg-8 text-center">
            <div style={{ textAlign: "left" }}>
              <div clas="form-group">
                <label className="label mb-1">Foto :</label>
                <input type="file" className="form-control" />
              </div>
              <div clas="form-group">
                <label className="label mb-1">Title :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                />
              </div>
              <div clas="form-group">
                <label className="label mb-1">Ingredients :</label>
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Ingredients"
                ></textarea>
              </div>
              <div clas="form-group">
                <label className="label mb-1">Video :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Video"
                />
              </div>
              <button className="btn btn-warning">Post</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end-content --> */}

      <Footer />
    </div>
  );
}

export default AddRecipe;
