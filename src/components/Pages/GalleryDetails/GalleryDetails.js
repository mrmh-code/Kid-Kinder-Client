import React from "react";
import "./GalleryDetails.css";
const GalleryDetails = (props) => {
  const { img } = props.gallery;
  return (
    <div>
      <div className="col ">
        <img className="gallery-img" src={img} alt="" />
      </div>
    </div>
  );
};

export default GalleryDetails;
