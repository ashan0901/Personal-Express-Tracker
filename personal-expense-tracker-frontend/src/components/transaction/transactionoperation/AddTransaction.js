import React, { useState, useEffect } from "react"; // Import useEffect
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createTransaction } from "../../../actions/projectActions";
import axios from "axios";
import Nav1 from "../../shared/Nav1";

const AddTransaction = ({ createTransaction }) => {
  const { walletId, userId } = useParams(); // Adjusted to get both walletId and userId from the URL
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    type: "1",
    date: "",
    purpose: "0",
  });
  const [wallet, setWallet] = useState({ name: "Loading..." });

  useEffect(() => {
    // Using useEffect to fetch wallet details only once after component mounts
    const fetchWalletDetails = async () => {
      try {
        const walletResponse = await axios.get(
          `http://localhost:8080/wallet/${userId}`
        );
        setWallet(walletResponse.data);
      } catch (error) {
        console.error("Error fetching wallet details:", error);
        setWallet({ name: "Error fetching wallet name" });
      }
    };

    fetchWalletDetails();
  }, [userId, walletId]); // Dependencies for useEffect

  const changeHandler = (event, fieldName) => {
    const value = event.target.value;
    setTransaction((prev) => ({
      ...prev,
      [fieldName]: value,
      ...(fieldName === "type" && value === "1" && { purpose: "0" }),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTransaction = {
      amount: transaction.amount,
      description: transaction.description,
      type: transaction.type,
      transactionDate: transaction.date,
      purpose: transaction.purpose,
    };

    // Adjusted to pass both userId and walletId to the createTransaction action
    createTransaction(newTransaction, navigate, walletId, userId);
    console.log(newTransaction);
  };

  return (
    <div>
      <Nav1 />
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/user/${userId}/wallet/${walletId}`}
                className="btn btn-info btn-lg"
              >
                Back to Transactions
              </Link>
              <h4 className="display-4 text-center">Record New Transaction</h4>
              <p className="lead text-center">{wallet.name}</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="number"
                    value={transaction.amount}
                    onChange={(event) => changeHandler(event, "amount")}
                    min="1"
                    className="form-control form-control-lg"
                    placeholder="Amount"
                  />
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    value={transaction.description}
                    onChange={(event) => changeHandler(event, "description")}
                    placeholder="Description"
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Transaction Type :
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      checked={transaction.type === "1"}
                      onChange={(event) => changeHandler(event, "type", false)}
                      className="form-check-input"
                      type="radio"
                      id="income"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="income">
                      Income
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      checked={transaction.type === "2"}
                      onChange={(event) => changeHandler(event, "type", false)}
                      className="form-check-input"
                      type="radio"
                      id="expense"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="expense">
                      Expense
                    </label>
                  </div>

                  <br />
                  <br />

                  {transaction.type === "2" && (
                    <div className="form-group">
                      <label htmlFor="transactionPurpose">Purpose:</label>
                      <select
                        id="transactionPurpose"
                        className="form-control"
                        value={transaction.purpose}
                        onChange={(event) => changeHandler(event, "purpose")}
                      >
                        <option value="0">Select Purpose</option>
                        <option value="1">Food</option>
                        <option value="2">Transport</option>
                        <option value="3">Entertainment</option>
                        <option value="4">Communication</option>
                        <option value="5">Cloths</option>
                        <option value="6">Toiletry</option>
                        <option value="7">Other</option>
                      </select>
                    </div>
                  )}
                </div>
                <br />
                <h6>Transaction Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    value={transaction.transactionDate}
                    onChange={(event) => changeHandler(event, "date")}
                    className="form-control form-control-lg"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { createTransaction })(AddTransaction);
