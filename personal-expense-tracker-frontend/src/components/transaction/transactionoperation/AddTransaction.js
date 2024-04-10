// import React, { useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
// import { connect } from "react-redux";
// import { createTransaction } from "../../../actions/projectActions";
// import axios from "axios";

// const AddTransaction = ({ createTransaction }) => {
//   // Destructure createTransaction from props
//   const { id } = useParams();
//   const navigate = useNavigate(); // Use useNavigate hook for navigation
//   const [transaction, setTransaction] = useState({
//     amount: "",
//     description: "",
//     type: "1",
//     date: "",
//   });
//   const [wallet, setWallet] = useState({ name: "Loading..." });

//   // Function to fetch wallet details from the server
//   const fetchWalletDetails = async () => {
//     try {
//       const walletResponse = await axios.get(
//         `http://localhost:8080/wallet/${id}`
//       );
//       setWallet(walletResponse.data); // Set fetched wallet details to state
//     } catch (error) {
//       console.error("Error fetching wallet details:", error);
//       setWallet({ name: "Error fetching wallet name" }); // Handle error
//     }
//   };

//   fetchWalletDetails();

//   const changeHandler = (event, fieldName) => {
//     setTransaction({ ...transaction, [fieldName]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let newTransaction = {
//       amount: transaction.amount,
//       description: transaction.description,
//       type: transaction.type,
//       transactionDate: transaction.date,
//     };

//     createTransaction(newTransaction, navigate, id); // Pass navigate as a parameter if needed in createTransaction action
//     console.log(newTransaction); // Log transaction object to confirm data
//   };

//   return (
//     <div className="add-PBI">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 m-auto">
//             <Link to={`/transaction/${id}`} className="btn btn-light">
//               Back to Wallet
//             </Link>
//             <h4 className="display-4 text-center">Record New Transaction</h4>
//             <p className="lead text-center">{wallet.name}</p>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="number"
//                   value={transaction.amount}
//                   onChange={(event) => changeHandler(event, "amount")}
//                   min="1"
//                   className="form-control form-control-lg"
//                   placeholder="Amount"
//                 />
//               </div>
//               <div className="form-group">
//                 <textarea
//                   className="form-control form-control-lg"
//                   value={transaction.description}
//                   onChange={(event) => changeHandler(event, "description")}
//                   placeholder="Description"
//                 ></textarea>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleFormControlTextarea1">
//                   Transaction Type :
//                 </label>
//                 <div className="form-check form-check-inline">
//                   <input
//                     checked={transaction.type === "1"}
//                     onChange={(event) => changeHandler(event, "type", false)}
//                     className="form-check-input"
//                     type="radio"
//                     id="income"
//                     value="1"
//                   />
//                   <label className="form-check-label" htmlFor="income">
//                     Income
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input
//                     checked={transaction.type === "2"}
//                     onChange={(event) => changeHandler(event, "type", false)}
//                     className="form-check-input"
//                     type="radio"
//                     id="expense"
//                     value="2"
//                   />
//                   <label className="form-check-label" htmlFor="expense">
//                     Expense
//                   </label>
//                 </div>
//               </div>
//               <h6>Transaction Date</h6>
//               <div className="form-group">
//                 <input
//                   type="date"
//                   value={transaction.transactionDate}
//                   onChange={(event) => changeHandler(event, "date")}
//                   className="form-control form-control-lg"
//                 />
//               </div>
//               <input type="submit" className="btn btn-primary btn-block mt-4" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default connect(null, { createTransaction })(AddTransaction);

import React, { useState, useEffect } from "react"; // Import useEffect
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createTransaction } from "../../../actions/projectActions";
import axios from "axios";

const AddTransaction = ({ createTransaction }) => {
  const { walletId, userId } = useParams(); // Adjusted to get both walletId and userId from the URL
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    type: "1",
    date: "",
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
    setTransaction({ ...transaction, [fieldName]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTransaction = {
      amount: transaction.amount,
      description: transaction.description,
      type: transaction.type,
      transactionDate: transaction.date,
    };

    // Adjusted to pass both userId and walletId to the createTransaction action
    createTransaction(newTransaction, navigate, walletId, userId);
    console.log(newTransaction);
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link
              to={`/user/${userId}/wallet/${walletId}`}
              className="btn btn-light"
            >
              Back to Wallet
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
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  value={transaction.description}
                  onChange={(event) => changeHandler(event, "description")}
                  placeholder="Description"
                ></textarea>
              </div>
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
              </div>
              <h6>Transaction Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  value={transaction.transactionDate}
                  onChange={(event) => changeHandler(event, "date")}
                  className="form-control form-control-lg"
                />
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { createTransaction })(AddTransaction);
