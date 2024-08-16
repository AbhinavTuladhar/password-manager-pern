import { AnimatePresence } from 'framer-motion'

import AppRouter from '../router'

const AnimatedRoutes = () => (
  <AnimatePresence mode="wait" initial={true}>
    <AppRouter />
  </AnimatePresence>
)

export default AnimatedRoutes
