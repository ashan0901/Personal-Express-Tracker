import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav1() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
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
              <Link className="nav-link" to={`/`}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav1;
