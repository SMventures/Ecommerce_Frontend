import React from 'react';
import { mainCarouselData } from './MainCarouselData'; // Corrected import

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () => {
    
    const items = mainCarouselData.map((item) => ( // Corrected variable name
        <img className="cursor-pointer" role="presentation" src={item.image} alt="" />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default MainCarousel;
