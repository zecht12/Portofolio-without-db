'use client'

import ParticlesContainer from '@/components/ParticlesContainer'
import ProjectsBtn from '@/components/ProjectsBtn'
import Avatar from '@/components/Avatar'
import { Image } from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

export default function Home() {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
        <div className='flex flex-col justify-center text-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className='h1'>
            Transforming Ideas<br/>Into <span className='h1 text-accent'>Digital Reality</span>
          </h1>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Hi, I'm zecht. I'm a fullstack web developer especially in build and designing web. Recently I'm focused on building responsive web applications with mongodb database and prisma.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
