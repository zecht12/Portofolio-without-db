'use client'
import React,{useState} from "react";
import {FaHtml5,FaCss3,FaJs,FaReact} from "react-icons/fa";
import {SiNextdotjs, SiVercel,SiFramer, SiExpo, SiTailwindcss, SiFirebase} from "react-icons/si";
import { DiNodejs } from 'react-icons/di'
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <DiNodejs/>,
          <SiVercel/>,
          <SiTailwindcss/>
        ],
      },
      {
        title: 'Aplication Development',
        icons: [
          <SiExpo/>,
          <SiTailwindcss/>,
          <SiFirebase/>
        ],
      },
    ],
  },
  {
    title: 'Certificate',
    info: [
      {
        title: 'Dasar Web Development - Dicoding',
        stage: '2023',
      },
      {
        title: 'Belajar membuat Front-End web untuk pemula - Dicoding',
        stage: '2023',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Elementary Student - SD Karangasem 1 Surakarta',
        stage: '2022',
      },
      {
        title: 'Midle School Student - SMP Negeri 2 Surakarta',
        stage: '2022',
      },
      {
        title: 'Animation - SMK NEgeri 9 Surakarta',
        stage: '2022',
      },
      {
        title: 'Informatics Engineer - Universitas Duta Bangsa',
        stage: '2022',
      },
    ],
  },
];

export default function Page() {
  const [index, setIndex]= useState(0);
  console.log(index)


  return (
    <div className="h-auto w-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[375px] ">
        <Avatar/>
      </motion.div>
    </div>
  )
}
