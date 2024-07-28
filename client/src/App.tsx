import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Navbar from './components/navbar'
import AppRouter from './components/router'

const App = () => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <div className="min-h-dvh bg-slate-800 text-white">
        <Navbar />
        <AppRouter />
      </div>
    </QueryClientProvider>
  )
}

export default App
