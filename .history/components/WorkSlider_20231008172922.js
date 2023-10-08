import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from 'react'
import {  BsarrowRight } from 'react-icons/bs'
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <Swiper
    navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }}
    onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
    }}
    pagination={{ clickable: true }}
    freeMode={true}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 15
      },
      1280:{
        slidesPerView: 1,
        spaceBetween: 15
      }
    }}
    className='h-[280px] sm:h-[380px] '>
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index)=> {
                return(
                  <div key={index} className="relative overflow-hidden rounded-lg flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image src={image.path} width={500} height={300} alt="image" />
                      <div className="bg-gradient-to-l absolute inset-0 from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                      <div className="absolute translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tranking-[0.2em]">
                          <div className="delay-100 ">
                            LIVE
                          </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            PROJECT
                          </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 text-xl">
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;
