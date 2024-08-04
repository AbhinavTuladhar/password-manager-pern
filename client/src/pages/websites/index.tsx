import React from 'react'

import WebsiteService from '@/services/website.service'
import { useQuery } from '@tanstack/react-query'

const Websites = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['website-list'],
    queryFn: WebsiteService.getWebsites,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default Websites
