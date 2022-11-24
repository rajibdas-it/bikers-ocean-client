import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import one from "../../../assets/slider-img/cbr.png";
import two from "../../../assets/slider-img/cbr.png";
import three from "../../../assets/slider-img/cbr.png";
import four from "../../../assets/slider-img/cbr.png";
import five from "../../../assets/slider-img/cbr.png";
import six from "../../../assets/slider-img/cbr.png";
import seven from "../../../assets/slider-img/cbr.png";

const Banner = () => {
  return (
    <div className=" my-16 border border-red-500">
      <Swiper
        effect={"coverflow"}
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={six} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[40vh] rounded" src={seven} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
