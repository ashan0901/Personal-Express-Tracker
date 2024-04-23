import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../shared/Nav";
import "./Register.css";
import Swal from "sweetalert2";
import backgroundVideo from "./v1.mp4";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const errors = {};
    if (password.length < 8) {
      errors.length = "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      errors.uppercase = "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      errors.lowercase = "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      errors.number = "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.special = "Password must contain at least one special character.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = validatePassword(formData.password);
    setErrors(newErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      formData.password === formData.confirmPassword
    ) {
      try {
        const response = await axios.post(
          "http://localhost:8080/account/save",
          formData
        );
        console.log(response);
        setTimeout(() => {
          Swal.fire({
            title: "Success!",
            text: "Signup Successful",
            icon: "success",
            confirmButtonText: "Great!",
            timer: 3000,
            timerProgressBar: true,
            didClose: () => navigate("/"),
          });
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: "Signup failed. User name Already Exists",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } else {
      setLoading(false);
      if (formData.password !== formData.confirmPassword) {
        Swal.fire({
          title: "Error!",
          text: "Passwords do not match",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  return (
    <div>
      <Nav />
      <div className="bodyclass1">
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
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                required
                name="firstname"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                required
                name="lastname"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
              />
              {Object.keys(errors).map((key) => (
                <p key={key} className="error">
                  {errors[key]}
                </p>
              ))}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
            <div className="login-link">
              <p>
                Already Registered?&nbsp;<Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {loading && (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Signup;
