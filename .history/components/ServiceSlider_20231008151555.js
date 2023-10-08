import { RxArrowTopRight, RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx'
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from 'react';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return(
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
      },
      640:{
        slidesPerView: 1,
      },
      112
    }}
    className='h-[240px] sm:h-[340px] '>
      {serviceData.map((item,index) => {
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,165,0.15)] transition-all duration-300 '>
              <div className='text-4xl text-accent mb-4'>
                {item.icon}
              </div>
              <div>
                <div>
                  {item.title}
                </div>
                <p>
                  {item.description}
                </p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;
