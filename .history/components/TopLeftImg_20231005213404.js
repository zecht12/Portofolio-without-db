import Image from "next/image";

const TopLeftImg = () => {
  return(
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[">
      <Image src="/top-left-img.png" alt="TopLeftImg" width={400} height={400} />
    </div>
  )
};

export default TopLeftImg;
