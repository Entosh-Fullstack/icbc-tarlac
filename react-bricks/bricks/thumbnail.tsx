import React from "react";
import { types } from "react-bricks/frontend";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
        <img src="sample1.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="sample2.jpg" alt="Image 2" />
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
