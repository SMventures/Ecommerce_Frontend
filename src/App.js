import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomersRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path="*" element={<CustomerRouters />} />
        <Route path="/Admin/*" element={<AdminRouters/>}></Route>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
      




