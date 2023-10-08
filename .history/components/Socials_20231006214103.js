import Link from "next/link";
import { RiYoutubeLink, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiThreadsLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return(
    <div>
      <Link href="/" className="">
        <RiYoutubeLink size={15} />
      </Link>
    </div>
  )
};

export default Socials;
