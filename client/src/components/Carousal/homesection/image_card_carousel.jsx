import React, { useRef, useState } from "react";
import { homeCarousalData } from "../home_carousal_data";
import AliceCarousel from "react-alice-carousel";
import HomeImageCard from "../../Cards/HomeImageCard";

const HomeImageItemCarousel = ({data,category}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? homeCarousalData.length - 1 : prevIndex - 1
      );
    }
  };
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex((prevIndex) =>
        prevIndex === homeCarousalData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  const syncActiveIndex = ({ item }) => {
    console.log(activeIndex);
    setActiveIndex(item);
  };
  const responsive = {
    0: { items: 1 },
    720: { items: 5 },
    1024: { items: 8 },
  };
  const items = data.map((item) => (
    <HomeImageCard img={item.image} />
  ));
  return (
    <div className="flex flex-col px-10 my-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">{category}</h1>
        {/* Left Arrow */}
        <div className="flex gap-3">
          <button
            disabled={activeIndex == 0}
            onClick={slidePrev}
            className={`rounded-full border p-2 border-black ${
              activeIndex === 0 ? "bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed" : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right Arrow */}

          <button
            onClick={slideNext}
            disabled={activeIndex === items.length - 1}
            className={`rounded-full border p-2 border-black ${
              activeIndex === items.length - 1
                ? "bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        ref={carouselRef}
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default HomeImageItemCarousel;
