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
  const pathname = router.pathname
  return(
    <nav>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10'></div>
      {navData.map((link, index)=> {
        return(
            <Link href={link.path}>
              {link.icon}
            </Link>
        )
      })}
    </nav>
  )
};

export default Nav;
