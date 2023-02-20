import React, { useEffect, useState } from "react";
import TeacherDetails from "../TeacherDetails/TeacherDetails";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://marketing-tix-server.onrender.com/teacher")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <div className="row  row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-5">
        {teachers == false ? (
          <div style={{ margin: "10rem auto" }}>
            <p>Loading.....</p>
            <div className="spinner-border p-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          teachers?.map((u) => <TeacherDetails key={u.id} teacher={u} />)
        )}
      </div>
    </div>
  );
};

export default Teacher;
