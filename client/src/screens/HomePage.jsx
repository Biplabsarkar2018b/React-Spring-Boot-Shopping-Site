import React from 'react'
import HomeCarousel from '../components/Carousal/home_carousal'
import HomeImageItemCarousel from '../components/Carousal/homesection/image_card_carousel'
import { homeCarousalData } from '../components/Carousal/home_carousal_data'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <div>
            <HomeImageItemCarousel data={homeCarousalData} category={"Men's Kurtas"}/>
            <HomeImageItemCarousel data={homeCarousalData} category={"Women's Kurtas"}/>
            <HomeImageItemCarousel data={homeCarousalData} category={"Shoes"}/>
            <HomeImageItemCarousel data={homeCarousalData} category={"Watches"}/>
            
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage