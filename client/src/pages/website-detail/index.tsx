import { useParams } from 'react-router-dom'

import WebsiteService from '@/services/website.service'
import { useQuery } from '@tanstack/react-query'

const WebsiteDetail = () => {
  const params = useParams()

  const websiteId = params.id as string

  const { data, isLoading, isError } = useQuery({
    queryKey: ['website-detail', websiteId],
    queryFn: () => WebsiteService.getWebsiteDetail(websiteId),
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  if (!data) return <div> No data to be found.</div>

  const { name, accounts } = data.data

  return (
    <div>
      <h1 className="text-5xl font-bold"> {name} </h1>
      <div className="flex flex-col gap-y-6">
        {accounts.map(account => (
          <div key={account.userName}>
            <p>{account.userName}</p>
            <p>{account.password}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebsiteDetail
