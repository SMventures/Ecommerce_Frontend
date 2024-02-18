import React from 'react';
import { Box, styled } from '@mui/material';
import { Fragment } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const navigate = useNavigate();

  const navigateToJeans = () => {
    navigate('/jeans');
  };

  const navigateToWomen = () => {
    navigate('/women');
  };

  return (
    <Fragment>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide title="Deal of the Day" timer={true} />
        <Slide title="New Arrivals" timer={false} />
        <Slide title="Season's Top Pickup" timer={false} />
        <MidSection />
        <Slide title="Best of Electronics" timer={false} />
        <Slide title="Recommendations" timer={false} />
        <Slide title="Trendy Fashion Collection" timer={false} onClick={navigateToWomen} />
        <Slide title="Best Selling Books" timer={false} onClick={navigateToJeans} />
      </Component>
    </Fragment>
  );
};

export default Home;
