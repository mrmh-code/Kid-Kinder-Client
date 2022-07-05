import React from "react";
import "./ClassesData.css";
const ClassesData = (props) => {
  const { name, Age, Seats, Time, Fee, description, img } = props.classData;

  return (
    <div className="classdata">

      <div className="col">
        <div className="card" style={{ background: "#F8F9FA", border: "0px" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text">{description}</p>
            <hr></hr>
            <table>
              <tr>
                <td>Age of Kids</td>
                <td>{Age}</td>
              </tr>

              <tr>
                <td>Total Seats</td>
                <td>{Seats}</td>
              </tr>

              <tr>
                <td>Class Time</td>
                <td>{Time}</td>
              </tr>
              <tr>
                <td>Tution Fee</td>
                <td>{Fee}</td>
              </tr>
            </table>

            <div className="text-center mt-3">
              <button
                className="btn   text-white text-center px-3 rounded-pill text-center"
                style={{ background: "#17A2B8" }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesData;
