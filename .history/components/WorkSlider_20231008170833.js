import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from 'react'
import { BsarrowRight } from 'react-icons/bs'
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
        slidesPerView: 3,
        spaceBetween: 15
      },
      1280:{
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    className='h-full '>
      {workSlides.slides.map((slide,index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {slide.images.map((image,index)=> {
                return(
                  <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div>
                      <Image src={image.path} width={500} height={300} alt="image" />
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
