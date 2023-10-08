'use client'

import React from 'react'
import ServiceSlider from '@/components/ServiceSlider'
import Bulb from '@/components/Bulb';
import { Circles } from '@/components/Circles'
import { Motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


const Page = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col contrast-less:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 '>
            <h2 className='h2 xl:mt-8'>
              My Services <span className='text-accent'>.</span>
            </h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>Lorem</p>
          </div>
          <ServiceSlider/>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}

export default Page