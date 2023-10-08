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
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:text-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 absolute transition-all duration-300 text-[22px] ' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
