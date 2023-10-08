import Link from "next/link";
import { RiYoutubeLink, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiThreadsLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return(
    <div>
      <Link href="/" className="">
        <RiYoutubeLink s />
      </Link>
    </div>
  )
};

export default Socials;
