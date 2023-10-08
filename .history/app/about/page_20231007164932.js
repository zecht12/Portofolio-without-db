'use client'
import React,{useState} from "react";
import {FaHtml5,FaCss3,FaJs,FaReact} from "react-icons/fa";
import {SiNextdotjs, SiVercel,SiFramer, SiVercel, SiTailwindcss, SiFirebase} from "react-icons/si";
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
          <SiVercel/>,
          <SiTailwindcss/>,
          <SiFirebase/>
        ],
      },
    ],
  },
  {
    title: 'Sertificate',
    info: [
      {
        title: 'Web Development - Dikoding',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
    ],
  },
];

export default function Page() {
  const [index, setIndex]= useState(0);


  return (
    <div>
      <Circles/>
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[375px] ">
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div>
          text
        </div>
        <div>
          text
        </div>
      </div>
    </div>
  )
}
