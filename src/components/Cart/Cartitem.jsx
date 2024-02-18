// CartItem.jsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4" style={{ maxWidth: '800px' }}> {/* Adjusted max-width */}
      <div className="flex items-center">
        <div className="w-24 h-24 lg:w-32 lg:h-32 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://stockmarketpartner.com/wp-content/uploads/2021/04/3375-stock-market-shirts-forex-stock-trading-forex-traders-pullover-hoodie.jpg" alt="" />
        </div>
        <div className="ml-4 flex-grow">
          <p className="font-semibold">Hoodie</p>
          <p className="text-gray-600 text-sm">Size: L, White</p>
          <p className="text-gray-600 text-sm">Seller: Crishtaliyo Zfashion</p>
          <div className="flex items-center mt-2">
            <p className="font-semibold">Rs 199</p>
            <p className="ml-2 line-through text-sm text-gray-500">Rs 211</p>
            <p className="ml-2 text-green-600 text-sm font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "#2874f0" }}>
            <DoNotDisturbOnIcon />
          </IconButton>
          <span className="px-2 py-1 bg-gray-200 rounded">3</span>
          <IconButton sx={{ color: "#2874f0" }}>
            <AddCircleIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#2874f0" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
