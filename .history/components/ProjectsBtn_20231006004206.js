import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href="/work" >
        <Image src={'/rounded-text.png'} alt='Rounded-text' width={141} height={148} className='animate-spin-slow w' />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
