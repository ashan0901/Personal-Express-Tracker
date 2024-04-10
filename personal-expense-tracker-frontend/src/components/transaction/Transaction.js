// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// const Transaction = () => {
//   const { userId, walletId } = useParams(); // Adjusted to match the route parameters
//   const [transactions, setTransactions] = useState([]); // State to store transactions
//   const [wallet, setWallet] = useState({ name: "Loading..." }); // State to store wallet details, with a default name
//   const [balance, setBalance] = useState(0); // State to store the calculated balance

//   console.log(
//     `TransactionComponent received userId: ${userId} and walletId: ${walletId}`
//   );

//   useEffect(() => {
//     // Function to fetch transactions from the server
//     const fetchTransactions = async () => {
//       try {
//         const transactionsResponse = await axios.get(
//           `http://localhost:8080/transaction/${walletId}`
//         );
//         setTransactions(transactionsResponse.data); // Set fetched transactions to state
//         calculateBalance(transactionsResponse.data); // Calculate and set balance
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };

//     // Function to fetch wallet details from the server
//     const fetchWalletDetails = async () => {
//       try {
//         const walletResponse = await axios.get(
//           `http://localhost:8080/wallet/${userId}`
//         );
//         setWallet(walletResponse.data); // Set fetched wallet details to state
//       } catch (error) {
//         console.error("Error fetching wallet details:", error);
//         setWallet({ name: "Error fetching wallet name" }); // Handle error
//       }
//     };

//     fetchTransactions();
//     fetchWalletDetails();
//   }, [walletId, userId]); // Dependency array includes walletId to refetch if the walletId changes

//   // Function to calculate the balance
//   const calculateBalance = (transactions) => {
//     const totalBalance = transactions.reduce((acc, transaction) => {
//       return transaction.type === 1
//         ? acc + transaction.amount
//         : acc - transaction.amount;
//     }, 0);
//     setBalance(totalBalance);
//   };

//   return (
//     <div className="container">
//       <Link to={`/${userId}`} className="btn btn-default btn-lg mb-3">
//         Back to Dashboard
//       </Link>
//       <Link to={`/trns/add/${walletId}`} className="btn btn-info btn-lg mb-3">
//         <i className="fas fa-plus-circle"> Record new Transaction</i>
//       </Link>
//       <br />
//       <div className="card text-center">
//         <div className="card-header bg-success text-white">
//           <h4>{wallet.name} Balance</h4>
//           <h1>Rs. {balance}</h1> {/* Display the calculated balance */}
//         </div>
//       </div>
//       <hr />

//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">Date</th>
//             <th scope="col">Description</th>
//             <th scope="col">Amount</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr
//               key={index}
//               className={
//                 transaction.type === 1 ? "table-success" : "table-danger"
//               }
//             >
//               <td>
//                 {
//                   new Date(transaction.transactionDate)
//                     .toISOString()
//                     .split("T")[0]
//                 }
//               </td>
//               <td>{transaction.description}</td>
//               <td
//                 className={
//                   transaction.type === 1 ? "text-success" : "text-danger"
//                 }
//               >
//                 Rs. {transaction.amount}
//               </td>
//               <td>{/* Icons for edit and delete, adjust as necessary */}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Transaction;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Transaction = () => {
  const { userId, walletId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [wallet, setWallet] = useState({ name: "Loading..." });
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/transaction/${walletId}`
        );
        // Ensure the response is an array before setting it
        if (Array.isArray(response.data)) {
          setTransactions(response.data);
          calculateBalance(response.data);
        } else {
          // Log unexpected response for debugging
          console.error(
            "Expected an array of transactions, received:",
            response.data
          );
          setTransactions([]); // Clear transactions state if not an array
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    const fetchWalletDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/wallet/${walletId}`
        );
        setWallet(response.data);
      } catch (error) {
        console.error("Error fetching wallet details:", error);
        setWallet({ name: "Error fetching wallet name" });
      }
    };

    fetchTransactions();
    fetchWalletDetails();
  }, [walletId]); // Dependency on walletId ensures this effect runs again if the walletId changes

  const calculateBalance = (transactions) => {
    const total = transactions.reduce((acc, transaction) => {
      return transaction.type === 1
        ? acc + parseFloat(transaction.amount)
        : acc - parseFloat(transaction.amount);
    }, 0);
    setBalance(total);
  };

  return (
    <div className="container">
      <Link to={`/${userId}`} className="btn btn-default btn-lg mb-3">
        Back to Dashboard
      </Link>
      <Link
        to={`/user/${userId}/wallet/${walletId}/addTransaction`}
        className="btn btn-info btn-lg mb-3"
      >
        Record new Transaction
      </Link>
      <br />
      <div className="card text-center">
        <div className="card-header bg-success text-white">
          <h4>{wallet.name} Balance</h4>
          <h1>Rs. {balance.toFixed(2)}</h1>
        </div>
      </div>
      <hr />

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={
                transaction.type === 1 ? "table-success" : "table-danger"
              }
            >
              <td>
                {new Date(transaction.transactionDate).toLocaleDateString()}
              </td>
              <td>{transaction.description}</td>
              <td>Rs. {transaction.amount}</td>
              <td>{transaction.type === 1 ? "Income" : "Expense"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
