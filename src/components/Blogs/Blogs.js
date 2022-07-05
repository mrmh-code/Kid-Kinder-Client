import React from "react";
import { FaUser, FaFolder, FaComments } from "react-icons/fa";
import "./Blogs.css";
const Blogs = (props) => {
  const { name, subject, img, comments, description } = props.blog;

  return (
    <div>

      <div className="col">
        <div className="card blogs">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p>
              <span>
                <span className="icon-bar">
                  <FaUser />
                </span>{" "}
                <span className="icon-text">Admin</span>{" "}
              </span>
              <span>
                <span className="icon-bar">
                  <FaFolder />
                </span>{" "}
                <span className="icon-text">{subject}</span>{" "}
              </span>
              <span>
                <span className="icon-bar">
                  <FaComments />
                </span>{" "}
                <span className="icon-text">{comments}</span>{" "}
              </span>
            </p>
            <p className="card-text blog-description">{description}</p>

            <button
              className="btn  mt-3 text-white  px-3 rounded-pill text-center"
              style={{ background: "#17A2B8" }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Blogs;
