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
      <div>
        <div>
          <h1 className='h1'>
            Transforming Ideas<br/>Into <span className='h1 text-accent'>Digital Reality</span>
          </h1>
          <p className='max-w-sm xl:'>
            Hi, I'm zecht. I'm a fullstack web developer especially in build and designing web. Recently I'm focused on building responsive web applications with mongodb database and prisma.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
