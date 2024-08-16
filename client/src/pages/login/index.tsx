import { motion } from 'framer-motion'

import LoginForm from './login-form'

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid h-full flex-1 place-items-center"
    >
      <LoginForm />
    </motion.div>
  )
}

export default Login
