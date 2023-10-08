import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 ">
      <Image src={'/circle.png'} width={260} height={200} className="w-gull h-full" alt="circle" />
    </div>
  )
};

export default Circles;
