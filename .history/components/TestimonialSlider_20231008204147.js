import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from "next/image";

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const Tes = () => {
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
                      <div className="bg-gradient-to-l absolute inset-0 from-[#892b96] via-[#570f61] to-[#2b107e] opacity-0 group-hover:opacity-100 transition-all duration-700 "></div>
                      <div className="absolute translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tranking-[0.2em]">
                          <div className="delay-100 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 ">
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
z