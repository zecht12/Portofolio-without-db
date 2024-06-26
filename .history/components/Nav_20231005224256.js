'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return(
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16 top-0 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index)=> {
          return(
              <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center hover:text-accent group transition-all duration-300`} href={link.path} key={index} >
                <div>
                  <div className='bg-white re'>
                    <div className='text-[12px] '>
                      {link.name}
                    </div>
                  </div>
                </div>
                <div>
                  {link.icon}
                </div>
              </Link>
          )
        })}
      </div>
    </nav>
  )
};

export default Nav;
