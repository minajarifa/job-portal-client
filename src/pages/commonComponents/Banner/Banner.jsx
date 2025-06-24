import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-center"
      >
        <SwiperSlide className="mb-10">
          <img
            className="w-full h-96 rounded-3xl"
            src="https://i.ibb.co/5gP71d0j/images.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <img
            className="w-full h-96 rounded-3xl"
            src="https://i.ibb.co/bj0c28g1/download.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <img
            className="w-full h-96 rounded-3xl"
            src="https://i.ibb.co/DP1PjYtV/download.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
