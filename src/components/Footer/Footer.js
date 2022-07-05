import React from "react";
import ICON from "../Header/download.png";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaAddressBook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row  row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-5 footer-section">
        <div className="col ">
          <div className="d-flex">
            <img
              src={ICON}
              height="60"
              alt=" Logo"
              loading="lazy"
              style={{ margin: "5px" }}
            />
            <span
              style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              KidKinder
            </span>
          </div>

          <p>
            Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
            dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
            stet diam duo eos rebum ipsum diam ipsum elitr.
          </p>
          <span className="m-2">
            <FaTwitter />
          </span>
          <span className="m-2">
            <FaFacebook />
          </span>
          <span className="m-2">
            <FaLinkedin />
          </span>
          <span className="m-2">
            <FaInstagram />
          </span>
        </div>

        <div className="col">
          <h4>Get In Touch</h4>
          <h5>
            <span>
              {" "}
              <FaAddressBook />{" "}
            </span>{" "}
            Address
          </h5>
          <p>123 Street, New York, USA</p>

          <h5>
            <span>
              <FaEnvelope />
            </span>{" "}
            Email
          </h5>
          <h5>
            <span>
              <FaPhoneAlt />
            </span>{" "}
            Phone
          </h5>
        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <div className="Quick-Link">
            <Link to="/ " className="Link-item">
              {" "}
              &gt; Home
            </Link>
            <br />
            <Link to="/classes" className="Link-item">
              {" "}
              &gt; Our Classes
            </Link>
            <br />
            <Link to="/teachers" className="Link-item">
              {" "}
              &gt; Our Teachers
            </Link>
            <br />
            <Link to="/gallery" className="Link-item">
              {" "}
              &gt; Our Gallery
            </Link>
            <br />
            <Link to="/students" className="Link-item">
              {" "}
              &gt; Our Students
            </Link>
            <br />
            <Link to="/joinclass" className="Link-item">
              {" "}
              &gt; Join class
            </Link>
            <br />
          </div>
        </div>

        <div className="col">
          <h4>Newsletter</h4>
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
            <button
              className="btn w-75  mt-2 py-3 rounded-pill"
              style={{ background: "#17A2B8", color: "white" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
