import { motion } from 'framer-motion'

const transitionVariants = (
  initial:{
    x:"100%",
    width:"100%"
  },
  animate:{
    x:"0%",
    width:"0%"
  },
  exit:{
    x:['0'],
    width:[]
  }
)

const Transition = () => {
  return (
    <>
      <div>Transition</div>
    </>
  );
};

export default Transition;
