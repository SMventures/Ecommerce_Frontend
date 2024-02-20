import React from 'react';
import { Box, Modal } from '@mui/material';
import Signup from '../Auth/Signup'; // Import your Signup component
import Login from '../Auth/Login'
import { useLocation, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useState, useEffect } from 'react';



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const AuthModal = ({ handleClose, open }) => {
    const location = useLocation();
    const navigate=useNavigate()

    const { auth } = useSelector((store) => store);
    const jwt = localStorage.getItem("jwt");
    useEffect(() => {
        if (auth.user){
           handleClose();
          
           }
          }
      , [auth.user]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/login" ? (
                        <Login />
                    ) : (
                        <Signup />
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModal;
