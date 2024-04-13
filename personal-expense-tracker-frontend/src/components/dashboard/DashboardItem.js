import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { deleteWallet } from "../../actions/projectActions";
import "./loadingScreen.css";
import { useNavigate } from "react-router-dom";

const DashboardItem = ({ wallet, deleteWallet }) => {
  const [loading, setLoading] = useState(false);

  // Assuming `userId` is passed down from parent component (e.g., Dashboard) or derived from the URL
  const { userId } = useParams();
  const navigate = useNavigate();

  const deleteBtnClick = () => {
    if (window.confirm("Are you sure you want to delete this wallet?")) {
      deleteWallet(wallet.id);
    }
  };

  const handleViewTransactionsClick = () => {
    setLoading(true);
    // Simulate a short delay or put this inside an async operation if needed
    setTimeout(() => {
      navigate(`/user/${userId}/wallet/${wallet.id}`);
      setLoading(false);
    }, 1000); // Adjust this delay as needed
  };

  return (
    <div className="container">
      {loading && (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      )}
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-6">
            <h3>{wallet.name}</h3>
            <p>Account Number: {wallet.accountNumber}</p>
            <p>{wallet.description}</p>
          </div>
          <div className="col-lg-4 col-md-3 col-6 text-center">
            <h3>Balance</h3>
            <h1>Rs. {wallet.currentBalance}</h1>
          </div>
          <div className="col-md-4 col-12 d-lg-block">
            <ul className="list-group">
              <div
                onClick={handleViewTransactionsClick}
                style={{ cursor: "pointer" }}
              >
                <li className="list-group-item board text-success">
                  <i className="fa fa-flag-checkered pr-1">
                    {" "}
                    View Transactions{" "}
                  </i>
                </li>
              </div>
              <Link to={`/updatewallet/${wallet.id}`}>
                <li className="list-group-item update text-info">
                  <i className="fa fa-edit pr-1"> Update Account Info</i>
                </li>
              </Link>

              <Link to={`/${userId}`} onClick={deleteBtnClick}>
                <li className="list-group-item delete text-danger">
                  <i className="fa fa-minus-circle pr-1"> Delete Account</i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteWallet })(DashboardItem);
