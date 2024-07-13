import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const initSlides = [
  { id: 1, paralaxData: "35%", url: "img/slides/slide-1-layer-back.jpg" },
  { id: 2, paralaxData: "25%", url: "img/slides/slide-1-layer-middle.png" },
  { id: 3, paralaxData: "14%", url: "img/slides/slide-1-layer-front.png" },
];

const SlidesWrapper = () => {
  return (
    <Swiper>
      <div className="swiper-wrapper">
        <div className="swiper-slide slider__item">
          {initSlides.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className="slider__layer"
                data-swiper-parallax={slide.paralaxData}
                // style="background-image: url(img/slides/slide-1-layer-back.jpg);"
              ></div>
            );
          })}
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__layer"
            data-swiper-parallax="35%"
            // style="background-image: url(img/slides/slide-2-layer-back.jpg);"
          ></div>
          <div
            className="slider__layer"
            data-swiper-parallax="25%"
            // style="background-image: url(img/slides/slide-2-layer-middle.png);"
          ></div>
          <div
            className="slider__layer"
            data-swiper-parallax="14%"
            // style="background-image: url(img/slides/slide-2-layer-front.png);"
          ></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__layer"
            data-swiper-parallax="35%"
            // style="background-image: url(img/slides/slide-3-layer-back.jpg);"
          ></div>
          <div
            className="slider__layer"
            data-swiper-parallax="25%"
            // style="background-image: url(img/slides/slide-3-layer-middle.png);"
          ></div>
          <div
            className="slider__layer"
            data-swiper-parallax="14%"
            // style="background-image: url(img/slides/slide-3-layer-front.png);"
          ></div>
        </div>
      </div>
    </Swiper>
  );
};

export default SlidesWrapper;
