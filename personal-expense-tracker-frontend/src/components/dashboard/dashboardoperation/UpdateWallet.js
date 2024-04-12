import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getWallet } from "../../../actions/projectActions";
import axios from "axios";
import Nav1 from "../../shared/Nav1";

const UpdateWallet = ({ wallet, getWallet }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [walletState, setWalletState] = useState({
    name: "",
    accountNumber: "",
    description: "",
    priority: "",
  });

  useEffect(() => {
    getWallet(id); // Assuming this action updates the Redux store, which then updates the 'wallet' prop
  }, [getWallet, id]);

  useEffect(() => {
    if (wallet) {
      setWalletState({
        name: wallet.name || "",
        accountNumber: wallet.accountNumber || "",
        description: wallet.description || "",
        // Ensure priority is not null; use a default value or an empty string
        priority: wallet.priority || "", // You can replace "" with a default value like "3" for Low if that makes sense for your app
      });
    }
  }, [wallet]);

  const changeHandler = (event, fieldName) => {
    setWalletState({
      ...walletState,
      [fieldName]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/wallet/${id}`, walletState)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav1 />

      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Wallet</h5>
              <hr />
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    value={walletState.name}
                    onChange={(event) => changeHandler(event, "name")}
                    className="form-control form-control-lg"
                    placeholder="Account Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={walletState.accountNumber}
                    onChange={(event) => changeHandler(event, "accountNumber")}
                    className="form-control form-control-lg"
                    placeholder="Account No"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    value={walletState.description}
                    onChange={(event) => changeHandler(event, "description")}
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    value={walletState.priority}
                    onChange={(event) => changeHandler(event, "priority")}
                    name="priority"
                  >
                    <option value={3}>Display Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet.wallet,
});

export default connect(mapStateToProps, { getWallet })(UpdateWallet);
