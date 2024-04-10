import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getWallets } from "../../actions/projectActions";
import DashboardItem from "./DashboardItem";

const Dashboard = ({ getWallets, wallets }) => {
  const { userId } = useParams(); // Adapted to use userId
  const [totalBalance, setTotalBalance] = useState(0.0);

  useEffect(() => {
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">My Wallets</h1>
            <br />
            <div className="btn-group">
              <Link to={`/wall/add/${userId}`} className="btn btn-info btn-lg">
                Create new wallet
              </Link>
            </div>
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
