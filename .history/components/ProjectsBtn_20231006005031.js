import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href="/work" className='relative w-[185px] h-[185px] ' >
        <Image src={'/rounded-text.png'} alt='Rounded-text' width={141} height={148} className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] ' />
        <HiArrowRight className='absolute text-4xl' />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
