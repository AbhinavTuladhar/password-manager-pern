import WebsiteService from '@/services/website.service'
import { useQuery } from '@tanstack/react-query'

import WebsiteListTable from './website-table'

const Websites = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['website-list'],
    queryFn: WebsiteService.getWebsites,
  })

  if (isLoading) return <div>Loading...</div>

  if (error && !data) return <div>Error</div>

  if (!data) return <div> No data to be found.</div>

  return (
    <div className="space-y-10 py-4">
      <h1 className="text-center text-4xl font-bold">List of websites</h1>
      <WebsiteListTable data={data.data} />
    </div>
  )
}

export default Websites
