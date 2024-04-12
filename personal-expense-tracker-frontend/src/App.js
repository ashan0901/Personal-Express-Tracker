import React from "react";
import "./App.css";
// import Nav from "./components/shared/Nav";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import CreateWallet from "./components/dashboard/dashboardoperation/CreateWallet";
import NotFound from "./components/shared/NotFound";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Provider } from "react-redux";
import store from "./Store";
import UpdateWallet from "./components/dashboard/dashboardoperation/UpdateWallet";
import Transaction from "./components/transaction/Transaction";
import AddTransaction from "./components/transaction/transactionoperation/AddTransaction";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Nav />    */}
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
