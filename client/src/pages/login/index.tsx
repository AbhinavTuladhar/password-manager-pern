import AnimatedPage from '@/components/animated-page'

import LoginForm from './login-form'

const Login = () => {
  return (
    <AnimatedPage className="grid h-full flex-1 place-items-center">
      <LoginForm />
    </AnimatedPage>
  )
}

export default Login
