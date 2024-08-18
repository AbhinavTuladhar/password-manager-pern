import AnimatedPage from '@/components/animated-page'
import useAuth from '@/hooks/useAuth'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return <AnimatedPage>{isAuthenticated ? 'Hello World' : 'Please login'}</AnimatedPage>
}

export default Home
