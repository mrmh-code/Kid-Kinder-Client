import {
  FaApple,
  FaBook,
  FaBrain,
  FaCarAlt,
  FaHeadphones,
  FaPenFancy,
} from "react-icons/fa";
import HOMEBG from "../../../img/header.png";
import ABOUTBG from "../../../img/about-1.jpg";
import portfolioT from "../../../img/portfolio-3.jpg";
import "./Home.css";
import BookSeat from "../../BookSeat/BookSeat";
import Blog from "../../Blog/Blog";
import Class from "../../Classs/Class";
import Teacher from "../../Teacher/Teacher";
const Home = () => {
  return (
    <div>
      <section>
        <div className="header pb-5">
          <div className="row   gx-0">
            <div className="col-10 col-md-5 col-lg-5 col-lg-6">
              <div className="left">
                <h5>Kids Learning Center</h5>
                <h1>New Approach to Kids Education</h1>
                <p>
                  Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est
                  amet sed sit. Ipsum dolor no justo dolor et, lorem ut dolor
                  erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore
                  sed stet et est justo dolore.
                </p>
                <button
                  className="btn px-4 py-2 rounded-pill"
                  style={{ background: "#00394F", color: "white" }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-10 col-md-5 col-lg-5 col-lg-6">
              <div className="right">
                <img src={HOMEBG} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="type-learn">
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-5 gx-0 res-type-learn"
       
        >
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaBrain />
                </span>
              </div>
              <div>
                <h4>Play Ground</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaHeadphones />
                </span>
              </div>
              <div>
                <h4>Music and Dance</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaPenFancy />
                </span>
              </div>
              <div>
                <h4>Arts and Crafts</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaCarAlt />
                </span>
              </div>
              <div>
                <h4>Safe Transportation</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaApple />
                </span>
              </div>
              <div>
                <h4>Healthy food</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4 py-4 px-4 me-3">
              <div>
                <span
                  className="m-3 mt-3"
                  style={{ color: "rgb(23,162,184)", fontSize: "30px" }}
                >
                  {" "}
                  <FaBook />
                </span>
              </div>
              <div>
                <h4>Educational Tour</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est
                  <br /> rebum dolor ut, clita dolor vero
                  <br /> lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row  gx-0">
          <div className=" col-lg-5 col-sm-8 col-10  col-md-4 ">
            <img className="about-img" src={ABOUTBG} alt="" />
          </div>

          <div className="col-lg-5 col-sm-8 col-10  col-md-4">
            <div className="learn-about-right">
              <h6>LEARN ABOUT US</h6>
              <h2>Best School For Your Kids</h2>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <div className="d-flex mb-2 mt-2 clean">
                <div>
                  <img src={portfolioT} alt="" />
                </div>
                <div>
                  <p>
                    {" "}
                    <span> &#10003;</span> Labore eos amet dolor amet diam
                  </p>
                  <p>
                    <span> &#10003;</span>Etsea et sit dolor amet ipsum
                  </p>
                  <p>
                    <span> &#10003;</span>Diam dolor diam elitripsum vero.
                  </p>
                </div>
              </div>

              <button
                className="btn mt-1 px-4 py-1  rounded-pill text-white"
                style={{ background: "rgb(23,162,184)" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="classesKids">
          <h5>POPULAR CLASSES</h5>
          <h1>Classes for Your Kids</h1>
        </div>
        {<Class />}
      </section>

      <section>{<BookSeat />}</section>

      <section className="teacher-section">
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

      {<Teacher />} 
      </section>

      <section className="blog-section">
        <div className="text-center  classesKids mb-3">
          <h5>LATEST BLOG</h5>
          <h1>Latest Articles From Blog</h1>
        </div>
        {<Blog />}
      </section>
    </div>
  );
};

export default Home;
