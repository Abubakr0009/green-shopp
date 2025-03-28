"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "LET'S MAKE A BETTER PLANET",
    img1: "/icons/navgul2.svg",
    img2: "/icons/navgul1.svg",
    text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
  {
    title: "LET'S OBSERVE A BETTER PLANET",
    img1: "/icons/navgul2.svg",
    img2: "/images/image copy 3.png",
    text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
  {
    title: "LET'S LIVE IN A BETTER PLANET",
    img1: "/icons/navgul2.svg",
    img2: "/images/image copy 2.png",
    text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
];

const SwiperComponent = () => {
  return (
    <div className="w-[1165px] max-w-full h-auto mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="custom-pagination"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-full h-[400px] bg-[#F5F5F580]">
              <div className="pl-10 w-[600px]">
                <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                  WELCOME TO GREENSHOP
                </h3>
                <h1 className="font-black text-[#3D3D3D] text-6xl max-lg:text-5xl max-md:text-2xl">
                  {slide.title.split(" ").slice(0, -1).join(" ")} <br />
                  <span className="text-[#46A358]">{slide.title.split(" ").pop()}</span>
                </h1>
                <p className="text-sm font-normal text-[#727272] w-[600px] max-lg:text-xs mt-[10px]">
                  {slide.text}
                </p>
                <button className="bg-[#46A358] rounded-md text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                  SHOP NOW
                </button>
              </div>
              <div className="flex-1 relative flex justify-center items-center max-md:hidden">
                <Image
                  src={slide.img1}
                  alt="Slide decoration"
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] relative top-[120px] left-[115px]"
                  priority
                />
                <Image
                  src={slide.img2}
                  alt="Slide image"
                  width={500}
                  height={500}
                  className="w-[400px] h-[400px] ml-[50px]"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
