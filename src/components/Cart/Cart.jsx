// Cart.jsx
import React from 'react';
import CartItem from './Cartitem.jsx';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Cart = () => {
  return (
<div className="container my-8 mt-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item, index) => <CartItem key={index} />)}
        </div>
        <div className="col-span-1">
          <div className="bg-white p-4 rounded shadow">
            <p className="font-semibold text-lg mb-4">Price details</p>
            <hr className="mb-4" />
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price</span>
                <span>Rs 4697</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600">Rs 3429</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-green-600">Rs 1278</span>
              </div>
            </div>
            {/* Use Link instead of Button for navigation */}
            <Link to="/checkout?step=2">
              <Button variant="contained" className="w-full mt-5" sx={{ background: "#2874f0", color: "#fff" }}>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
