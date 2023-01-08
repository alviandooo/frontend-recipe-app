import React from "react";

function CardRecipe(props) {
  const { title, imageSrc } = props;
  return (
    <div>
      <div className="clickable-image">
        <img src={imageSrc} width="100%" height="100%" alt={title} />
        <h2 className="image-title">{title}</h2>
      </div>
    </div>
  );
}

export default CardRecipe;
