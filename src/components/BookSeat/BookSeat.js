import React from "react";
import "./BookSeat.css";
const BookSeat = () => {
  return (
    <div>
      <div
        className="row row-cols-1 row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 gx-0"
        style={{ marginTop: "100px" }}
      >
        <div className="col ">
          <div className="book-seat-left mt-5">
            <h6>BOOK A SEAT</h6>
            <h1>Book A Seat For Your Kid</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <p>
              {" "}
              <span> &#10003;</span> Labore eos amet dolor amet diam
            </p>
            <p>
              {" "}
              <span> &#10003;</span> Etsea et sit dolor amet ipsum
            </p>
            <p>
              {" "}
              <span> &#10003;</span> Diam dolor diam elitripsum vero.
            </p>

            <button
              className="btn px-4 py-2 text-white rounded-pill"
              style={{ background: "#138496" }}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="col me-0 pe-0 mt-5 ">
          <div className="res-book">
            <div className="book-input-top ">
              <h2>Book A Seat</h2>
            </div>
            <div className="book-form pb-3">
              <form style={{ textAlign: "center" }}>
                <div className="form-group">
                  <input
                    type="text"
                    className="w-75 rounded-3 border-0 p-2 m-2"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>

                <div className="form-group ">
                  <input
                    type="email"
                    className="w-75 rounded-3 border-0 p-2 m-2"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>

                <div className="form-group">
                  <select
                    className="w-75 custom-select rounded-3  border-0 px-3 m-2"
                    style={{ height: " 47px" }}
                  >
                    <option>Select A Class</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                  </select>
                </div>

                <div>
                  <button
                    className="btn w-75  mt-2 py-3 rounded-pill"
                    style={{ background: "#00394F", color: "white" }}
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSeat;
