import { Slide, ToastContainer } from 'react-toastify'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AnimatedRoutes from './components/animated-routes'
import Navbar from './components/navbar'
import { AuthProvider } from './context/auth-provider'

import 'react-toastify/dist/ReactToastify.css'

// Create the QueryClient instance outside the component to avoid re-creating on each render
const queryClient = new QueryClient()

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-dvh flex-col overflow-hidden bg-slate-800 text-white">
    <Navbar />
    <div className="container mx-auto flex flex-1 flex-col px-4">{children}</div>
  </div>
)

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppLayout>
        <AnimatedRoutes />
      </AppLayout>
    </AuthProvider>
    <ToastContainer autoClose={2000} transition={Slide} />
  </QueryClientProvider>
)

export default App
