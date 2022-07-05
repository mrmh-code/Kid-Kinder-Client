import React from "react";

const TeacherDetails = (props) => {
  // console.log(props);
  const { name, img, subject } = props.teacher;
  return (
    <div>
      <div className="col text-center">
        <img className="rounded-circle w-75" src={img} alt="" />

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

export default TeacherDetails;
