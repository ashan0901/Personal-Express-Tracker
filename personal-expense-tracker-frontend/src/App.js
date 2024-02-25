import React from "react";
import "./App.css";
import Nav from "./components/shared/Nav";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import CreateWallet from "./components/dashboard/dashboardoperation/CreateWallet";
import NotFound from "./components/shared/NotFound";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/createwallet" exact element={<CreateWallet />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" exact element={<LoginForm />} />
        <Route path="/register" exact element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
