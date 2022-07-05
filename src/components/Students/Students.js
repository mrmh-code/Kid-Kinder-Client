import React, { useEffect, useState } from "react";
import StudentsDetails from "../Pages/StudetnsDetails/StudentsDetails";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://dazzling-channel-islands-22143.herokuapp.com/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <div className="our-class">
        <h1>Enroll Students</h1>
        <p>Home / students</p>
      </div>

      <div className="row  row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 gx-0">
        {students == false ? (
          <div style={{ margin: "10rem auto" }}>
            <p>Loading.....</p>
            <div className="spinner-border p-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          students.map((u) => <StudentsDetails key={u.id} students={u} />)
        )}
      </div>
    </div>
  );
};

export default Students;
