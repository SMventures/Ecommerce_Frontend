import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';

//import { mens_tshirts } from '../Data/Men/mens_tshirts';//
//import { mens_hoodies } from '../Data/Men/mens_hoodies';//


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(1,10).map((item) => <HomeSectionCard product={item} />);
       
      
      if (items.length === 0) {
        return <div>No items available</div>;
     }
      
      
      

    return (
        <div className="relative p-5 border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2> 
            <div className="relative px-4 sm:px lg-px-8">
                <AliceCarousel
                    items={items}
                    disableButtonsControls   
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                
                   {activeIndex !== items.length - 5 && (
        
                    <Button
                        variant="contained"
                        className='z-50'
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white"
                        }}
                        aria-label='next'>
                        <KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
)}
                

                {activeIndex !== 0 &&
                <Button
                    variant="contained"
                    className='z-50'
                    onClick={slidePrev}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "0rem",
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: "white"
                    }}
                    aria-label='previous'>
                    <KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                }
            </div>
        </div>
    );
}

export default HomeSectionCarousel;
