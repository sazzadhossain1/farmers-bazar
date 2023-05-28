import React from "react";
import slider1 from "../../images/slider/slider-1.webp";
import slider2 from "../../images/slider/slider-2.webp";
import slider3 from "../../images/slider/slider-3.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <div>
        <>
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
