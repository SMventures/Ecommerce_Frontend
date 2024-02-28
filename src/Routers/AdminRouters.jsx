import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

import Admin from '../Admin/Admin'; // Import the Admin component

const AdminRouters = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Admin />} /> {/* Use Route component with element prop */}
            </Routes>
        </div>
    );
}

export default AdminRouters;
