import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiThreadsLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="/" className="text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiThreadsLine />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  )
};

export default Socials;
