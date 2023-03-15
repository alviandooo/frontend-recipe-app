import axios from "axios";
import React from "react";
//import redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as recipeReducer from "../../store/recipe";

function CardRecipe(props) {
  const { title, imageSrc, recipeId } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetailRecipe = (recipeId) => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${recipeId}`)
      .then((response) => {
        dispatch(
          recipeReducer.setRecipe({
            data: response?.data?.data,
            id: response?.data?.data?.recipes?.[0]?.id,
          })
        );
        navigate(`/detail/${response?.data?.data?.recipes?.[0]?.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        className="clickable-image"
        onClick={() => getDetailRecipe(recipeId)}
      >
        <img src={imageSrc} width="100%" height="100%" alt={title} />
        <h2 className="image-title">{title}</h2>
      </div>
    </div>
  );
}

export default CardRecipe;
