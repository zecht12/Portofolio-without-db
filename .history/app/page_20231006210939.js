'use client'

import ParticlesContainer from '@/components/ParticlesContainer'
import ProjectsBtn from '@/components/ProjectsBtn'
import Avatar from '@/components/Avatar'
import { Image } from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

export default function Home() {
  return (
    <div className='bg-primary/60 h-full w-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='flex flex-col justify-center text-center xl:pt-12 xl:text-left h-full container mx-auto'>
          <motion.h1 variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className='h1'>
            Transforming Ideas<br/>Into <span className='h1 text-accent'>Digital Reality</span>
          </motion.h1>
          <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatem quia asperiores, repudiandae minima delectus similique ipsa adipisci dolore laboriosam molestias, corporis perspiciatis nisi ratione iure aut repellat. Laudantium, magnam!
          </motion.p>
          <div className='flex justify-center xl:justify-start items-center relative'>
            <ProjectsBtn/>
          </div>
        </div>
      </div>
      <div className=' w-[1200px] h-full absolute right-0 bottom-0 '>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0'></div>
          <div>
            
          </div>
          <ParticlesContainer/>
          <motion.div variants={fadeIn('down',0.5)} transition={{duration: 1,ease:'easeInOut'}} initial="hidden" animate="show" exit="hidden" className='w-full h-full max-h-[678px] max-w-[737px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] '>
            <Avatar/>
          </motion.div>
      </div>
    </div>
  )
}
