'use client'

import TestimonialSlider from '@/components/TestimonialSlider'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex justify-center flex-col'>
        <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 mb-8 xl:mb-0'>
          What client <span className='text-accent'>says.</span>
        </motion.h2>
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden">
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  )
}
