import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Swal from "sweetalert2";

function Nav1() {
  const handleLogout = () => {
    sessionStorage.setItem("loginStatus", "false");
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logging out...",
          text: "Please wait.",
          showConfirmButton: false,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });

        setTimeout(() => {
          // Assuming you clear local storage or cookies to handle logout
          localStorage.clear(); // Clear user session token or other relevant data
          window.location = "/"; // Redirect to home or login page
        }, 2500); // Simulate an asynchronous operation like a server request
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container" style={{ fontSize: "18px" }}>
        <Link className="navbar-brand">Expense Manager</Link>
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
              <Link className="nav-link" to="#" onClick={handleLogout}>
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
