import React from "react";
import "./Banner.css";
import slider1 from "../../images/slider/slider-1.webp";
import slider2 from "../../images/slider/slider-2.webp";
import slider3 from "../../images/slider/slider-3.webp";
import rightImg1 from "../../images/Right-side-banner/blog-thumb-2.jpg";
import rightImg2 from "../../images/Right-side-banner/blog-thumb-3.jpg";

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
      <div className="banner-childParent-grid-div">
        <div>
          <Swiper
            // style={{ width: "50%" }}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="slider-img" src={slider1} alt="" />
              <div className="img-text-div">
                <h3>The Best Quality Products Guaranteed!</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam quibusdam maiores quasi architecto id obcaecati sapiente
                  perferendis beatae iure in? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Totam quibusdam maiores quasi
                  architecto id obcaecati sapiente perferendis beatae iure in?
                </p>
                <button>Shop Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider-img" src={slider2} alt="" />
              <div className="img-text-div">
                <h3>The Best Quality Products Guaranteed!</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam quibusdam maiores quasi architecto id obcaecati sapiente
                  perferendis beatae iure in? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Totam quibusdam maiores quasi
                  architecto id obcaecati sapiente perferendis beatae iure in?
                </p>
                <button>Shop Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider-img" src={slider3} alt="" />
              <div className="img-text-div">
                <h3>The Best Quality Products Guaranteed!</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam quibusdam maiores quasi architecto id obcaecati sapiente
                  perferendis beatae iure in? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Totam quibusdam maiores quasi
                  architecto id obcaecati sapiente perferendis beatae iure in?
                </p>
                <button>Shop Now</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
