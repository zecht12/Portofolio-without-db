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
            Transforming Ideas<spanp className='h1 text-accent'>Digital Reality</spanp>
          </h1>
        </div>
      </div>
      <div></div>
    </div>
  )
}
