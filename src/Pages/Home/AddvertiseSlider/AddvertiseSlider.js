import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

import { useQuery } from "@tanstack/react-query";

const AddvertiseSlider = () => {
  const { data: addvertiseItem = [], isLoading } = useQuery({
    queryKey: ["AdvertiseProduct"],
    queryFn: () =>
      fetch("https://bikers-ocean-server.vercel.app/createAdvertise").then(
        (res) => res.json()
      ),
  });

  // console.log(addvertiseItem);

  return (
    <>
      {addvertiseItem?.length > 0 && (
        <div className=" my-16">
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
            {addvertiseItem?.map(
              (item) =>
                item?.status === "available" && (
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

export default AddvertiseSlider;
