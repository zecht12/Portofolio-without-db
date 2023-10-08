import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiThreadsLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return(
    <div>
      <Link href="/" className="text-accent transi">
        <RiYoutubeLine size={15} />
      </Link>
    </div>
  )
};

export default Socials;
