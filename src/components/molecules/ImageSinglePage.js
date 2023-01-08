import React from "react";

function ImageSinglePage(props) {
  const { title, src, alt } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} className="image-1" alt={alt} width="500px" />
      <h1>{title}</h1>
    </div>
  );
}

export default ImageSinglePage;
