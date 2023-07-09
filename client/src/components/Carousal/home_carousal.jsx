import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarousalData } from "./home_carousal_data";

const HomeCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = homeCarousalData.map((item, key) => (
    <div key={key} className="flex items-center justify-center">
      <img
        className="w-full h-full p-2"
        role="presentation"
        src={item.image}
        alt="cloth photo"
      />
    </div>
  ));

  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex justify-center items-center">
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          keyboardNavigation={true}
          autoPlay={true}
          responsive={responsive}
          autoPlayInterval={1000}
          animationDuration={500}
          mouseTracking
          items={items}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
