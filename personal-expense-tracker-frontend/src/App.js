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
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/:userId" element={<Dashboard />} />
          <Route path="/wall/add/:userId" exact element={<CreateWallet />} />
          <Route path="/updatewallet/:id" exact element={<UpdateWallet />} />
          <Route
            path="/user/:userId/wallet/:walletId"
            element={<Transaction />}
          />
          <Route
            path="/user/:userId/wallet/:walletId/addTransaction"
            exact
            element={<AddTransaction />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/register" exact element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
