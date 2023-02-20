import React from "react";

const StudentsDetails = (props) => {
 
  const { name, subject, img } = props.students;
  return (
    <div>
      <div className="col text-center mt-5">
        <img
          className="rounded-circle"
          style={{ width: "100px", height: "100px" }}
          src={img}
          alt=""
        />

        <h2
          className="mt-3"
          style={{
            color: "#00394F",
            fontFamily: "'Handlee', cursive",
            fontWeight: "bold",
          }}
        >
          {name}
        </h2>
        <h6 style={{ color: "#746688", fontFamily: "'Handlee', cursive" }}>
          {subject}
        </h6>
      </div>
    </div>
  );
};

export default StudentsDetails;
