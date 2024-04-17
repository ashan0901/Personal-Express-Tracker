import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getWallet } from "../../../actions/projectActions";
import axios from "axios";
import Nav1 from "../../shared/Nav1";
import Swal from "sweetalert2";

const UpdateWallet = ({ wallet, getWallet }) => {
  const { walletId, userId } = useParams();
  const navigate = useNavigate();

  const [walletState, setWalletState] = useState({
    name: "",
    accountNumber: "",
    description: "",
    priority: "",
    limit: "",
  });

  useEffect(() => {
    getWallet(walletId); // Assuming this action updates the Redux store, which then updates the 'wallet' prop
  }, [getWallet, walletId, userId]);

  useEffect(() => {
    if (wallet) {
      setWalletState({
        name: wallet.name || "",
        accountNumber: wallet.accountNumber || "",
        description: wallet.description || "",
        // Ensure priority is not null; use a default value or an empty string
        priority: wallet.priority || "", // You can replace "" with a default value like "3" for Low if that makes sense for your app
        limit: wallet.limit || "", // You can replace "" with a default value like "0" if that makes sense for your app
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

    console.log(walletId);
    console.log(userId);
    axios
      .put(`http://localhost:8080/wallet/${userId}/${walletId}`, walletState)
      .then((res) => {})
      .catch((err) => console.log(err));
    Swal.fire({
      title: "Success!",
      text: "Wallet Updated Successfully",
      icon: "success",
      confirmButtonText: "Great!",
      didClose: () => navigate(`/${userId}`),
    });
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
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    value={walletState.accountNumber}
                    onChange={(event) => changeHandler(event, "accountNumber")}
                    className="form-control form-control-lg"
                    placeholder="Account No"
                  />
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    value={walletState.description}
                    onChange={(event) => changeHandler(event, "description")}
                    placeholder="Description"
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    value={walletState.limit}
                    onChange={(event) => changeHandler(event, "limit")}
                    className="form-control form-control-lg"
                    placeholder="Limit"
                  />
                </div>
                <br />
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
                <br />
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
