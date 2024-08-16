import { Slide, ToastContainer } from 'react-toastify'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AnimatedRoutes from './components/animated-routes'
import Navbar from './components/navbar'
import { AuthProvider } from './context/auth-provider'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <div className="flex min-h-dvh flex-col bg-slate-800 text-white">
          <Navbar />
          <div className="container mx-auto flex flex-1 flex-col px-4">
            <AnimatedRoutes />
          </div>
        </div>
      </AuthProvider>
      <ToastContainer autoClose={2000} transition={Slide} />
    </QueryClientProvider>
  )
}

export default App
