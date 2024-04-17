import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./shared/Nav";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <Nav />
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Personal Expense Manager hy</h1>
                <p className="lead">
                  Create your account to manage your daily expense and income
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-primary mr-2"
                  style={{ marginRight: "20px" }}
                >
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
