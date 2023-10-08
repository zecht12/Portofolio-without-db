import { motion } from 'framer-motion'

const transitionVariants = {
  initial: {
    x:"100%",
    width:"100%"
  },
  animate: {
    x:"0%",
    width:"0%"
  },
  exit: {
    x: ['0%','100%'],
    width: ['0%','100%']
  },
}

const Transition = () => {
  return (
    <>
      <div className='fixed top-0 bottom-0 right-full h-screen z-30 bg-[#2ess57] '>1</div>
      <div>2</div>
      <div>3</div>
    </>
  );
};

export default Transition;
