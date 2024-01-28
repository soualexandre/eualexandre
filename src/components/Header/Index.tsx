import React from 'react';
import styles from './header.module.css';
import { scrollTo } from '@/utils/scroolTo';
import { Transition, Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const itemHeaderClick = (item: string) => {
    scrollTo(item);
  };

  const [ref, inView] = useInView(); 
  
  const animateVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition: Transition = {
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animateVariants}
      transition={transition}
      className="my-4 flex text-white justify-between items-center w-full p-4"
    >
      <div className="text-bold">AS</div>
      <div className="items flex gap-4">
        <motion.div
          variants={animateVariants}
          transition={{ ...transition, delay: 0.1 }}
          className={`${styles.borderBottom}`}
        >
          Início
        </motion.div>
        <motion.a
          onClick={() => itemHeaderClick('sobre')}
          variants={animateVariants}
          transition={{ ...transition, delay: 0.2 }}
          className={`${styles.borderBottom} cursor-pointer`}
        >
          Sobre mim
        </motion.a>
        <motion.a
          onClick={() => itemHeaderClick('projects')}
          variants={animateVariants}
          transition={{ ...transition, delay: 0.3 }}
          className={`${styles.borderBottom}`}
        >
          Projetos
        </motion.a>
      </div>
      <div>
        <div className="p-4 rounded-full bg-white"></div>
      </div>
    </motion.div>
  );
};

export default Header;
