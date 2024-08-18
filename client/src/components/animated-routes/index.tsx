import { AnimatePresence } from 'framer-motion'

import AppRouter from '../router'

const AnimatedRoutes = () => (
  <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
    <AppRouter />
  </AnimatePresence>
)

export default AnimatedRoutes
