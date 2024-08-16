import { motion } from 'framer-motion'

import useAuth from '@/hooks/useAuth'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: '10px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '10px' }}
    >
      {isAuthenticated ? 'Hello World' : 'Please login'}
    </motion.div>
  )
}

export default Home
