import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="not-found-heading">404 - Not Found</h1>
                <p className="not-found-message">The page you are looking for does not exist.</p>
                <Link to="/" className="not-found-link">Go back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;
