import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Cart from '../components/Cart/Cart';
import Wishlist from '../components/Wishlist/Wishlist';
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Orders/Order';
import OrderDetail from '../components/Orders/OrderDetail';
import Header from '../components/Header/header';
import Home from '../components/Home/home';
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Product from "../components/Product/Product";
//import RateProduct from "../Components/ReviewProduct/RateProduct";

import { Box } from "@mui/material";
import { Login } from '@mui/icons-material';
import NotFound from '../components/NotFound';


const CustomerRouters = () => {
  return (
    <div className="">        
    <Header/>
       
       {/* <Box style={{marginTop:54}}>
         <Home/>
       </Box> */}
      
      <Routes>
      <Route path="/login" element={<Home/>}></Route>
     <Route path="/Signup" element={<Home />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/:category/" element={<Product />} />
        <Route path="/:category/:productId" element={<ProductDetails />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
        <Route path="/404" element={<NotFound/>}/>

        {/* <Route path="/account/rate/:productId" element={<RateProduct />} /> */}
      </Routes>
       <Footer /> 
    </div>
  );
};

export default CustomerRouters;
