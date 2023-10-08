'use client'

import Image from "next/image";

const Bulb = () => {
  return(
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 w-[200px] z-20 xl:w-[260px] ">
      <Image src="/bulb.png" alt="bulb" width={260} height={200} className="w-full h-full" />
    </div>
  )
};

export default Bulb;
