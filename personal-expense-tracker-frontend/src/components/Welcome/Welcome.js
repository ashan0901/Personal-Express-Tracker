import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import backgroundVideo from "./v2.mp4";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: 0,
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Nav />
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <br />
                <br />

                <h1 className="display-1 mb-4">Personal Expense Manager</h1>
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
