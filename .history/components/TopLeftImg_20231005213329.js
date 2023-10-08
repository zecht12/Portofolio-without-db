import Image from "next/image";

const TopLeftImg = () => {
  return(
    <div className="absolute left">
      <Image src="/top-left-img.png" alt="TopLeftImg" width={400} height={400} />
    </div>
  )
};

export default TopLeftImg;
