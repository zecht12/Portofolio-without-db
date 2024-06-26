'use client'
import React,{useState} from "react";
import {FaHtml5,FaCss3,FaJs,FaReact,FaWordpress,} from "react-icons/fa";
import {SiNextdotjs, SiVercel,SiFramer,} from "react-icons/si";
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
          <FaWordpress />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
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
