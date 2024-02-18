import React from 'react';
import { useEffect } from 'react';

const HomeSectionCard = (product) => {


    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src={product.product.imageUrl} alt='' />
            </div>
            <div className="p-4">
                <h3 className='text-lg font-medium text-gray-900'>{product.product.title}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.product.brand}</p>
            </div>
        </div>
    );
};

export default HomeSectionCard;

// Usage of HomeSectionCard component
export const ExampleComponent = () => {
    return (
        <div>
            <HomeSectionCard product={{ imageUrl: 'url_here', title: 'Title', brand: 'Brand' }} />
        </div>
    );
};
