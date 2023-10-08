import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiThreadsLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return(
    <div className="flex">
      <Link href="/" className="text-accent transition-all duration-300">
        <RiYoutubeLine size={15} />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiFacebookLine size={15} />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiTwitterLine size={15} />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiThreadsLine size={15} />
      </Link>
      <Link href="/" className="text-accent transition-all duration-300">
        <RiInstagramLine size={15} />
      </Link>
    </div>
  )
};

export default Socials;
