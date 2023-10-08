import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials";

const Header = () => {
  return(
    <header className="absolute z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
      <div className="container mx-0">
        <div>
          <Link href='/'>
            <Image src={'/'} width={220} height={48} alt="logo" priority={true} />
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
