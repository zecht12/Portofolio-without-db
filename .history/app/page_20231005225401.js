import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Transition from '@/components/Transition'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div>
      home
    </div>
  )
}
