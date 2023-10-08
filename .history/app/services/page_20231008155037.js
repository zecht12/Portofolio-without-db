'use client'

import React from 'react'
import ServiceSlider from '@/components/ServiceSlider'
import Bulb from '@/components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx'
import Circles from '@/components/Circles'

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
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Page() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
            <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>
              My Services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>Lorem</motion.p>
          </div>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%] '>
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}
