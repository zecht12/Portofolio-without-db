

import TestimonialSlider from '@/components/TestimonialSlider'
import { motion } from 'framer-motion'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex justify-center flex-col'>
        <motion.h2 className='h2 mb-8 xl:mb-0'>
          What client <span className='text-accent'>says.</span>
        </motion.h2>
        <div>
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  )
}
