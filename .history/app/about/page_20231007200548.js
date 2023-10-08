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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[375px] ">
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          text
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 pt-0 xl:pt-8">
            {aboutData.map((item, itemIndex) =>{
              return(
                <div
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 '}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`} >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="bg-pink-400/10 pt-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start px-4">
            {aboutData[index].info.map((item, itemIndex)=> {
              return(
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white">
                  <div>
                    {item.title}
                  </div>
                  <div className="hidden md:flex">
                    -
                  </div>
                  <div>
                    {item.stage}
                  </div>
                  <div className="grid grid- md:grid-cols-5 gap-x-6">
                    {item.icons?.map((icon, itemIndex)=> {
                      return(
                        <div className="text-2xl">
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
