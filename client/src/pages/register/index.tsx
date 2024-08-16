import { motion } from 'framer-motion'

import RegisterForm from './register-form'

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid h-full flex-1 place-items-center"
    >
      <RegisterForm />
    </motion.div>
  )
}

export default Register
