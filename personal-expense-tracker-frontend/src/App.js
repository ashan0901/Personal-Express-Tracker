import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
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
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/contact";
import Resourse from "./components/Resourse/Resources";
import ProtectedRoute from "./validators/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Nav />    */}
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route
            path="/:userId"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wall/add/:userId"
            exact
            element={
              <ProtectedRoute>
                <CreateWallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updatewallet/:userId/:walletId"
            exact
            element={
              <ProtectedRoute>
                <UpdateWallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:userId/wallet/:walletId"
            element={
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:userId/wallet/:walletId/addTransaction"
            exact
            element={<AddTransaction />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/register" exact element={<RegisterForm />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/resourse" exact element={<Resourse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
