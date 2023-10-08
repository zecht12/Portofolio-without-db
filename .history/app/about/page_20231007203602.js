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
    <div className="h-full w-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[375px] ">
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-0 xl:px-24">
        <div className="flex-1 flex flex-col justify-center max-w-[650px]">
          <h2>Captivating <span>stories</span> birth magnificent designs.</h2>
          <p className="text-justify">a year ago, i makes my first web at html and then i began to know react from dev news and then i know that react has framework that names next js. And then i deep dive learn about next js and database like mongodb firebase. Then 5 month after i learn nextjs i know that react has mobile version that is react-native and expo then i try it but in middle of learn i just decide to come back into web developers.</p>
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
          <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start px-4">
            {aboutData[index].info.map((item, itemIndex)=> {
              return(
                <div key={itemIndex} className="max-w-max gap-x-2 items-center text-white">
                  <div className="max-w-[700px]">
                    {item.title}
                  </div>
                  <div className="text-white">
                    {item.stage}
                  </div>
                  <div className="grid grid-cols-5 md: gap-x-6 w-full ">
                    {item.icons?.map((icon, itemIndex)=> {
                      return(
                        <div className="text-2xl text-white">
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
