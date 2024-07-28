import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Register from './components/register'

const App = () => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <div className="min-h-dvh bg-slate-800 text-white">
        <Register />
      </div>
    </QueryClientProvider>
  )
}

export default App
