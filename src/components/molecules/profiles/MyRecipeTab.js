import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardRecipe from "../CardRecipe";

function MyRecipeTab() {
  const [myRecipes, setMyRecipes] = useState([]);
  const user = useSelector((state) => state.auth);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?userId=${user.id}`)
      .then((response) => {
        setMyRecipes(response?.data?.data?.recipe);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
      {myRecipes.map((item, key) => (
        <div
          key={key}
          className="col-lg-3 col-md-4 col-sm-6 col-6 p-0 list-recipe"
        >
          <Link to={`/detail/${item.id}`} className="btn btn-lg btn-learn-more">
            <CardRecipe
              title={item.title}
              imageSrc={item.photo}
              recipeId={item.id}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyRecipeTab;
