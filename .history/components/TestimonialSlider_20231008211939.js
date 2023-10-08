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
      {testimonialData.slides.map((person, index) => {
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
                <div>
                  <div>
                    Quata and Mes
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