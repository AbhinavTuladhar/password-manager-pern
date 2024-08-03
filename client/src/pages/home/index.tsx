import useAuth from '@/hooks/useAuth'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return <div>{isAuthenticated ? 'Hello World' : 'Please login'}</div>
}

export default Home
