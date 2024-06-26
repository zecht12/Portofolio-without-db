'use client'

import './globals.css'
import {Sora} from '@next/font/google'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import TopLeftImg from '@/components/TopLeftImg'
import { useRouter } from 'next/navigation'
import Transition from '@/components/Transition'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})

export default function RootLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect((r) => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 1000));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 1000));
    };
  }, [router.events]);
  return (
    <html lang="en">
      <head>
        <title>Zecht Porto</title>
      </head>
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}>
        <AnimatePresence>
          <motion.div className='h-full' key={router.route}>
            <TopLeftImg/>
            <Nav/>
            <Header/>
            <Transition/>
            {loading & {children}}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
