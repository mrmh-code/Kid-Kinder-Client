import React, { useEffect, useState } from "react";
import GalleryDetails from "../GalleryDetails/GalleryDetails";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  useEffect(() => {
    fetch("https://dazzling-channel-islands-22143.herokuapp.com/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    const allImages = [...images];
    setSelectedImage(allImages);
  }, [images]);

  const HandleAll = () => {
    setSelectedImage(images);
  };

  const HandlePlay = () => {
    const playFil = images.filter((u) => u.Category === "playing");
    setSelectedImage(playFil);
  };

  const HandleDraw = () => {
    const DrawFill = images.filter((u) => u.Category === "drawing");
    setSelectedImage(DrawFill);
  };

  const HandleReading = () => {
    const ReadFill = images.filter((u) => u.Category === "Reading");
    setSelectedImage(ReadFill);
  };

  return (
    <div>
      <div className="our-class">
        <h1>Our Gallery</h1>
        <p>Home / Our Gallery</p>
      </div>
      <div className="classesKids">
        <h5>OUR GALLERY</h5>
        <h1>Our Kids School Gallery</h1>
      </div>

      <div className="button-design ">
        <button className="btns" onClick={HandleAll}>
          All
        </button>
        <button className="btns" onClick={HandlePlay}>
          Playing
        </button>
        <button className="btns" onClick={HandleDraw}>
          Drawing
        </button>
        <button className="btns" onClick={HandleReading}>
          Reading
        </button>
      </div>
      <div style={{ margin: "3rem" }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {selectedImage == false ? (
            <div style={{ margin: "10rem auto" }}>
              <p>Loading.....</p>
              <div className="spinner-border p-4" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            selectedImage?.map((u) => <GalleryDetails key={u.id} gallery={u} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
