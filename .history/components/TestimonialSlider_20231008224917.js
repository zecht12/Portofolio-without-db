'use client'

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
import { FaQuoteLeft } from "react-icons/fa";

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

const TestimonialSlider = () => {
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
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              <div>
                <div>
                  <div>
                    Avatar images
                  </div>
                  <div>
                    Name
                  </div>
                  <div>
                    Position
                  </div>
                </div>
                <div className="bg-pink-500/10 flex-1 flex flex-col before:w- ">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl marker:text-white/20 mx-auto md:mx-0" />
                  </div>
                  <div>
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;