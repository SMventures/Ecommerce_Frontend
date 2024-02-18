import React, { useState } from 'react';
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom'; // Import navigate function
import AuthModal from '../Auth/AuthModal'; // Import your AuthModal component

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    align-items: center; /* Align items vertically */
`;

const Container = styled(Box)`
    display: flex;
    font-size: 10px;
    margin-left: 10%; /* Push icons to the right */
    align-items: end; /* Align items vertically */
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 30px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 30px;
`;

const IconWrapper = styled(Box)`
    margin-right: 10px; /* Add space between icons */
    cursor: pointer; /* Add cursor pointer to indicate it's clickable */
`;

const CustomButtons = () => {
    const navigate = useNavigate();
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const handleClose = () => {
        setOpenAuthModal(false);
    };
    const handleOpen = () =>{
        setOpenAuthModal(true);

    }

    // Define functions to handle icon clicks and navigate to respective routes
    const handleWishlistClick = () => {
        navigate("/wishlist"); // Navigate to /wishlist route
    };

    const handleCartClick = () => {
        navigate("/cart"); // Navigate to /cart route
    };

    const handleLoginClick = () => {
        setOpenAuthModal(true);
    };

    return (
        <Wrapper>
            <LoginButton variant="contained" onClick={handleLoginClick}>SignIn</LoginButton>
            <Container>
                {/* Attach onClick event handlers to IconWrappers */}
                <IconWrapper onClick={handleWishlistClick}>
                    <FavoriteIcon />
                </IconWrapper>
                <IconWrapper onClick={handleCartClick}>
                    <ShoppingCartIcon />
                </IconWrapper>
            </Container>
            <AuthModal handleClose={handleClose} open={openAuthModal} />
        </Wrapper>
    ); 
}

export default CustomButtons;
