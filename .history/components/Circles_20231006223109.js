import Image from "next/image";

const Circles = () => {
  return (
    <div>
      <Image src={'/circle.png'} width={260} height={200} className="w-gull h-full" alt="cir" />
    </div>
  )
};

export default Circles;
