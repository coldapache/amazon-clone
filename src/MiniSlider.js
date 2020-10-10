import React, { useContext } from "react";
import Product from "./Product";
import SimpleImageSlider from "react-simple-image-slider";
import { CartContext } from "./CartContext";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./MiniSlider.css";

function MiniSlider() {
  const images = [
    {
      url: "https://m.media-amazon.com/images/I/51tecmNA51L._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/51LNkgjZMEL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/41ASji6x4QL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/616LwWS-UQL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/41cdIxaDbQL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/51sQwUD1JSL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/41c9pB4Us+L._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/41DH670FWpL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/41UfCUcJlTL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/5129vMij2TL._AC_SY200_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/31J1UldvvuL._AC_SY200_.jpg",
    },
  ];

  const myRef = React.createRef();

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };
  //prevClick slides it to the left

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth )) {
      slide.scrollLeft = 0;
    }
  };
  //nextClick slides it to the right. 
  //you MUST have scroll-behavior: smooth enabled

  return (
    <div className="wrapper">
      <div className="slider" ref={myRef}>
        {images.map((image, index) => (
          <div className="image" key={index}>
            <a href="#"></a>
            <img src={image.url} />
          </div>
        ))}
      </div>
      <div className="prev" onClick={prevClick}>
        <ChevronLeftIcon fontSize="large" />
      </div>
      <div className="next" onClick={nextClick}>
        <ChevronRightIcon fontSize="large" />
      </div>
      
    </div>
  );
}

export default MiniSlider;
