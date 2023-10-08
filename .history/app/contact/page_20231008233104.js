import React from 'react'
import Bulb from '@/components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Circles from '@/components/Circles'
import { BsArrowRight } from 'react-icons/bs'

export default function Page() {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className=''>
          <h2>Let's <span className='text-accent'>connect.</span></h2>
        </div>
      </div>
    </div>
  )
}
