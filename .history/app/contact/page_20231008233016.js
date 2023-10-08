import React from 'react'
import Bulb from '@/components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Circles from '@/components/Circles'
import { BsArrowRight } from 'react-icons/bs'

export default function Page() {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32'>
        <div className=''>
          <h2>Let's <span>connect.</span></h2>
        </div>
      </div>
    </div>
  )
}
