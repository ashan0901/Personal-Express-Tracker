import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getWallets } from "../../actions/projectActions";
import DashboardItem from "./DashboardItem";
import Nav1 from "../shared/Nav1";
import axios from "axios";
import backgroundVideo from "./v3.mp4";

const Dashboard = ({ getWallets, wallets }) => {
  const { userId } = useParams(); // Adapted to use userId
  const [totalBalance, setTotalBalance] = useState(0.0);
  const [account, setAccount] = useState({ name: "Loading..." });

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/${userId}`
        );

        setAccount(response.data);
      } catch (error) {
        console.error("Error fetching wallet details:", error);
        setAccount({ name: "Error fetching wallet name" });
      }
    };

    fetchAccountDetails();
    getWallets(userId); // Assume getWallets action can optionally take a userId to fetch wallets for a specific user
  }, [getWallets, userId]);

  useEffect(() => {
    if (wallets) {
      const totalBal = wallets.reduce(
        (acc, wallet) => acc + wallet.currentBalance,
        0
      );
      setTotalBalance(totalBal);
    }
  }, [wallets]);

  let walletComponents = Array.isArray(wallets) ? (
    wallets.map((wallet) => <DashboardItem key={wallet.id} wallet={wallet} />)
  ) : (
    <div className="alert alert-danger">Error loading wallets.</div>
  );

  return (
    <div className="projects">
      <Nav1 />
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
          opacity: "0.3",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">
              Welcome , {account.firstname} {account.lastname}
            </h1>
            <br />
            <div className="btn-group">
              <div>
                <Link
                  to={`/wall/add/${userId}`}
                  className="btn btn-info btn-lg"
                >
                  Create new wallet
                </Link>
              </div>
              <div
                style={{
                  marginLeft: "400px",
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                }}
              >
                My Wallets
              </div>
            </div>

            <br />
            <br />
            <div className="card text-center">
              <div className="card-header bg-success text-white">
                <h4>Current Balance (Total)</h4>
                <h1>Rs. {totalBalance}</h1>
              </div>
            </div>
            <hr />
            {walletComponents}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wallets: state.wallet.wallets, // Ensure your state structure matches this path
});

export default connect(mapStateToProps, { getWallets })(Dashboard);
