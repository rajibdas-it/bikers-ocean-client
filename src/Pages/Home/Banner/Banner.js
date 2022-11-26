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
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const { data: addvertiseItem = [], isLoading } = useQuery({
    queryKey: ["AdvertiseProduct"],
    queryFn: () =>
      fetch("http://localhost:5000/createAdvertise").then((res) => res.json()),
  });

  // console.log(addvertiseItem);

  return (
    <>
      {addvertiseItem.length > 0 && (
        <div className=" my-16 border border-red-500">
          <h2 className="text-center font-bold text-4xl my-5">
            New Arrived
            <span className="badge badge-lg text-primary">Hot Collections</span>
          </h2>

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
            {addvertiseItem.map(
              (item) =>
                item.status === "available" && (
                  <SwiperSlide key={item?._id}>
                    <img
                      className="h-[40vh] rounded"
                      src={item?.image}
                      alt=""
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Banner;
