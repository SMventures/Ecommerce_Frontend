import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data2/mens_kurta'
import { mens_tshirts } from '../../components/Data/Men/mens_tshirts'
import Header from './customer/components/customer.front/components/Header/header.jsx'

//import { accessoriesPage1 } from '../../components/Data/Accessories/accessories'
//import { StationeryPage1 } from '../../components/Data/Stationery/stationery'
//import { electronicsPage1 } from '../../components/Data/Electronics/electronics'
//import { women_hoodies } from '../../components/Data/Women/women_hoodies'
//import { women_tshirts } from '../../components/Data/Women/women_tshirts'
//import { mens_hoodies } from '../../components/Data/Men/mens_hoodies'
//import { mens_tshirts } from '../../components/Data/Men/mens_tshirts'
//import { booksPage1 } from '../../components/Data/Books/books'
//import { mens_kurta } from '../../components/Data/Men/mens_kurta'

const HomePage = () => {
    return (
   

<div>
<Header/>
   
    <MainCarousel/>
      
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
         <HomeSectionCarousel data={mens_tshirts} sectionName={"New Arrivals"}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Best sellers"}/>
         <HomeSectionCarousel data={mens_tshirts} sectionName={"Now Trending"}/>

         
        

      </div>
        
    </div>
    )
}

export default HomePage