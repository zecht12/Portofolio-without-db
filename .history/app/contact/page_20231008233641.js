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
        <div className='flex flex-col w-full max-w-[700px] bg-pink-500/10'>
          <h2 className='h2 text-center mb-12'>Let's <span className='text-accent'>connect.</span></h2>
          <form >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='email' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea name='' id='' rows={10} cols={30} pla></textarea>
          </form>
        </div>
      </div>
    </div>
  )
}
