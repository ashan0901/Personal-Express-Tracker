import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/dashboardoperation/CreateWallet';


function App() {
  return (

    <BrowserRouter>
       <Nav />
      <Routes>
        <Route path="/" exact element={< Welcome />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/createwallet" exact element={<CreateWallet />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
