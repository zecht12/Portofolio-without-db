import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href="/work" >
        <Image src={'/rounded-text.png'} width={} height={} />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
