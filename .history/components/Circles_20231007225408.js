'use client'

import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute md:-right-16 -right-0 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image src={'/circles.png'} width={260} height={200} className="w-gull h-full" alt="circle" />
    </div>
  )
};

export default Circles;
