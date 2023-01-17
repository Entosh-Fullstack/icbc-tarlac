import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { types, Text, RichText, Image } from 'react-bricks/frontend'
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
const Thumbnail: types.Brick = () => {
  return (
    <Splide aria-label="My Favorite Images">
      
      <SplideSlide>
      <Image
        propName="image"
        alt="Fallback alt tag"
        imageClassName=""   
        renderWrapper={({children, width, height}) => (
          <div className="wrapper">
            {children}
          </div>
        )}
      />
      </SplideSlide>
      <SplideSlide>
      <Image
        propName="image-1"
        alt="Fallback alt tag"
        imageClassName=""   
        renderWrapper={({children, width, height}) => (
          <div className="wrapper">
            {children}
          </div>
        )}
      />
      </SplideSlide>
    </Splide>
  );
};

Thumbnail.schema = {
  name: "thumbnail",
  label: "Thumbnail",
  sideEditProps: [],
};

export default Thumbnail;
