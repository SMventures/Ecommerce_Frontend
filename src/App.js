import './App.css';

import CustomButtons from './components/Header/CustomButtons';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomersRouters';

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path="*" element={<CustomerRouters />} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
      




