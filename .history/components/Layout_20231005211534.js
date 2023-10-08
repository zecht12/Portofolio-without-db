import React from 'react'
import {Sora} from '@next/font/google'
import Nav from './Nav'

const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})

export default function Layout() {
  return (
    <div>
      <Nav/> 
    </div>
  )
}
