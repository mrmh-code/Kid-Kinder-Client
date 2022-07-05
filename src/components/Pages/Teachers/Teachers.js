import React from "react";
import Teacher from "../../Teacher/Teacher";

const Teachers = () => {
  return (
    <div>
      <div className="our-class">
        <h1>Our Teachers</h1>
        <p>Home / Our Teachers</p>
      </div>

      <div className="text-center mt-5 mb-5 ">
        <h5 style={{ color: "#17ABD1", fontFamily: "'Handlee', cursive" }}>
          {" "}
          OUR TEACHERS
        </h5>
        <h1
          style={{
            color: "#17ABD1",
            fontFamily: "'Handlee', cursive",
            fontWeight: "bold",
          }}
        >
          Meet Our Teachers
        </h1>
      </div>

      <div className="mt-5 " style={{ margin: "0 7rem" }}>
        {<Teacher />}
      </div>

      <div className="mt-5" style={{ margin: "0 7rem" }}>
        {<Teacher />}
      </div>
    </div>
  );
};

export default Teachers;
