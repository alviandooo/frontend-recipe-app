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
  return (
    <div>
      <div
        className="clickable-image"
        onClick={() => {
          axios
            .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${recipeId}`)
            .then((response) => {
              dispatch(
                recipeReducer.setRecipe({
                  data: response?.data?.data?.[0],
                  id: response?.data?.data?.[0]?.id,
                })
              );
              navigate(`/detail/${response?.data?.data?.[0]?.id}`);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <img src={imageSrc} width="100%" height="100%" alt={title} />
        <h2 className="image-title">{title}</h2>
      </div>
    </div>
  );
}

export default CardRecipe;
