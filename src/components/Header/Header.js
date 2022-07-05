import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useFireBase from "../../hooks/useFirebase";
import ICON from "./download.png";
import "./Header.css";
const Header = () => {
  let activeStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#17A6C3",
  };

  const { user, singInGoogle, logOut } = useFireBase();
  // console.log(user)
  return (
    <div>
      <header className="sticky-top shadow p-1 bg-body rounded">
        <nav className="navbar p-3 navbar-expand-lg navbar-light rounded">
          <div className="container-fluid ">
            <span className="navbar-brand  me-2 ms-5">
              <img
                src={ICON}
                height="40"
                alt="MDB Logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </span>

            <span
              className="  h1 "
              style={{
                color: "#17A2B8",
                fontSize: "40px",
                fontWeight: "bold",
                marginRight: "100px",
              }}
            >
              KidKinder
            </span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className=" navbar px-3 me-2  item "
              >
                Home
              </NavLink>

              <NavLink
                to="/classes"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className=" navbar px-3 me-2 item"
              >
                Classes
              </NavLink>

              <NavLink
                to="/teachers"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navbar px-3 me-2 item"
              >
                Teachers
              </NavLink>

              <NavLink
                to="/gallery"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navbar px-3 me-2 item"
              >
                Gallery
              </NavLink>

              <NavLink
                to="/students"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navbar px-3  me-2 item"
              >
                Students
              </NavLink>

              <Link
                to="/joinClass"
                type="button"
                className=" ms-2  btn me-3 px-3 rounded-pill item"
                style={{ background: "#17A2B8", color: "white" }}
              >
                Join Class
              </Link>
              {user.displayName ? (
                <>
                  <span className="me-2">{user.displayName}</span>{" "}
                  <button onClick={logOut} className="btn btn-dark icon-none">
                    log out
                  </button>
                </>
              ) : (
                <button
                  onClick={singInGoogle}
                  className="  btn ms-2 m-2 py-2 icon-none"
                  style={{ background: "#17A2B8", color: "white" }}
                >
                  <FaGoogle />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
