// import axios from "axios";
// import { DELETE_WALLET, GET_ERROR } from "./types";
// import { GET_WALLETS } from "./types";
// import { GET_WALLET } from "./types";

// export const createWallet =
//   (newWallet, navigate, accountid) => async (dispatch) => {
//     await axios
//       .post(`http://localhost:8080/wallet/${accountid}`, newWallet)
//       .then((res) => {
//         console.log(res.data);
//         navigate(`/${accountid}`);
//         dispatch(getWallets(accountid));
//       })
//       .catch((err) => {
//         dispatch({ type: GET_ERROR, payload: err.response.data });
//       });
//   };

// export const getWallets = (accountid) => async (dispatch) => {
//   //console.log("hello " + accountid);
//   await axios.get(`http://localhost:8080/wallet/${accountid}`).then((res) => {
//     //console.log(res.data);
//     dispatch({ type: GET_WALLETS, payload: res.data });
//   });
// };

// export const getWallet = (id) => async (dispatch) => {
//   await axios.get(`http://localhost:8080/wallet/${id}`).then((res) => {
//     dispatch({ type: GET_WALLET, payload: res.data });
//   });
// };

// export const deleteWallet = (id) => async (dispath) => {
//   await axios.delete(`http://localhost:8080/wallet/${id}`).then((res) => {
//     dispath({ type: DELETE_WALLET, payload: id });
//     console.log("connected to delete wallet");
//   });
// };

// //Transactions
// export const createTransaction =
//   (newTransaction, navigate, Wid) => async (dispatch) => {
//     await axios
//       .post(`http://localhost:8080/transaction/${Wid}`, newTransaction)
//       .then((res) => {
//         navigate(`/transaction/${Wid}`);
//       })
//       .catch((err) => {
//         console.log(err);
//         //dispatch({ type: GET_ERROR, payload: err.response.data });
//       });
//   };

import axios from "axios";
import { DELETE_WALLET, GET_ERROR, GET_WALLETS, GET_WALLET } from "./types";

// Assuming `accountId` is the ID of the user and is required by your backend API
// to associate wallets with users

export const createWallet =
  (newWallet, navigate, accountId) => async (dispatch) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/wallet/${accountId}`,
        newWallet
      );
      console.log(res.data);
      navigate(`/${accountId}`);
      dispatch(getWallets(accountId));
    } catch (err) {
      dispatch({ type: GET_ERROR, payload: err.response.data });
    }
  };

export const getWallets = (accountId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/wallet/${accountId}`);
    dispatch({ type: GET_WALLETS, payload: res.data });
  } catch (err) {
    console.error("Error fetching wallets:", err);
    dispatch({ type: GET_ERROR, payload: err.response.data });
  }
};

export const getWallet = (walletId, accountId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/wallet/${accountId}/${walletId}`
    );
    dispatch({ type: GET_WALLET, payload: res.data });
  } catch (err) {
    console.error("Error fetching wallet details:", err);
    dispatch({ type: GET_ERROR, payload: err.response.data });
  }
};

export const deleteWallet = (walletId, accountId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/wallet/${walletId}`);
    dispatch({ type: DELETE_WALLET, payload: walletId });
    console.log("Connected to delete wallet");
  } catch (err) {
    console.error("Error deleting wallet:", err);
    dispatch({ type: GET_ERROR, payload: err.response.data });
  }
};

// Transactions
export const createTransaction =
  (newTransaction, navigate, walletId, accountId) => async (dispatch) => {
    try {
      await axios.post(
        `http://localhost:8080/transaction/${walletId}`,
        newTransaction
      );
      navigate(`/user/${accountId}/wallet/${walletId}`);
    } catch (err) {
      console.error("Error creating transaction:", err);
      // Consider dispatching GET_ERROR action if you want to handle errors globally
    }
  };
