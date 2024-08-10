import { useParams } from 'react-router-dom'

const WebsiteDetail = () => {
  const params = useParams()

  const websiteId = params.id as string

  return <div>WebsiteDetail: {websiteId}</div>
}

export default WebsiteDetail
