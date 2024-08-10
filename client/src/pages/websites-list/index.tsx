import { Link } from 'react-router-dom'

import WebsiteService from '@/services/website.service'
import { useQuery } from '@tanstack/react-query'

const Websites = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['website-list'],
    queryFn: WebsiteService.getWebsites,
  })

  if (isLoading) return <div>Loading...</div>

  if (error && !data) return <div>Error</div>

  if (!data) return <div> No data to be found.</div>

  return (
    <div className="">
      <h1 className="text-xl font-bold">List of websites</h1>
      {data.data.map(website => (
        <div key={website.id}>
          <Link to={`/website/${website.id}`}>{website.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Websites
