import React from "react";

import BookSeat from "../../BookSeat/BookSeat";
import Class from "../../Classs/Class";
import "./Classes.css";
const Classes = () => {
  return (
    <div>
      <div className="our-class">
        <h1>Our Classes</h1>
        <p>Home / Our Classes</p>
      </div>

      <div className="classesKids">
        <h5>POPULAR CLASSES</h5>
        <h1>Classes for Your Kids</h1>
      </div>

      {<Class />}

      {<BookSeat />}
    </div>
  );
};

export default Classes;
