import Image from "next/image";

const Bulb = () => {
  return(
    <div className="absolute -lef">
      <Image src="/bulb.png" alt="bulb" width={260} height={200} className="w-full h-full" />
    </div>
  )
};

export default Bulb;
