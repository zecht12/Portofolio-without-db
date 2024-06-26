import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials";

const Header = () => {
  return(
    <header className="absolute z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
      <div className="container mx-0">
        <div className="flex flex-col lg:flex-row justify-between i">
          <Link href='/'>
            <Image src={'/logo-GR.png'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 " />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  )
};

export default Header;
