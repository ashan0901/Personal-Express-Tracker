import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-primary mb-0"
      style={{ padding: 10 }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Expense Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul
            className="navbar-nav navbar-right"
            style={{ marginLeft: "auto" }}
          >
            <li className="nav-item">
              <Link className="nav-link" to={`/aboutus`}>
                About Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/resourse">
                Resourses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
