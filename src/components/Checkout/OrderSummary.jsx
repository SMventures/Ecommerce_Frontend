import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import OrderCard from '../Orders/OrderCard';

const OrderSummary = () => {
  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} md={8}>
          <div className='space-y-4'> {[1, 1, 1, 1].map((item) => <OrderCard key={item} />)}</div>
        </Grid>
        {/* Price details box */}
        <Grid item xs={12} md={4}>
          <div className="bg-white p-4 mx-6 rounded shadow">
            <p className="font-semibold text-lg  mb-4">Price details</p>
            <hr className="mb-4" />
            <div className="space-y-4">
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
            <Button variant="contained" className="w-full mt-5" sx={{ background: "#2874f0", color: "#fff" }}>Proceed to pay</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderSummary;
