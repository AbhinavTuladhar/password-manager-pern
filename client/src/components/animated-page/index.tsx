import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  initial: {
    opacity: 0,
    transitionTimingFunction: 'ease-in-out',
    transition: {
      type: 'tween',
    },
  },
  animate: {
    opacity: 1,
    transitionTimingFunction: 'ease-in-out',
    transition: {
      type: 'tween',
    },
  },
  exit: {
    opacity: 0,
    transitionTimingFunction: 'ease-in-out',
    transition: {
      type: 'tween',
    },
  },
}

interface PageProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const AnimatedPage: FC<PageProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={rest.className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
