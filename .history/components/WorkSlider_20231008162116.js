import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from 'react'
import { BsarrowRight } from 'react-icons/bs'

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
        slidesPerView: 3,
        spaceBetween: 15
      },
      1280:{
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    className='h-[240px] sm:h-[340px] '>
      {workSlides.slides.map((item,index) => {
        return (
          <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,165,0.15)] transition-all duration-300 '>
            <div className='text-4xl text-accent mb-4'>
              {item.icon}
            </div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>
                {item.title}
              </div>
              <p className='max-w-[350px] leading-normal '>
                {item.description}
              </p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:text-accent group-hover:rotate-45 duration-300 transition-all' />
            </div>
          </div>
        </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;
