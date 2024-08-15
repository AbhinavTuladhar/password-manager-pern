import { FC } from 'react'

import { isValidHttpUrl } from '@/utils/string.utils'

interface SourceProps {
  url: string
}

const UrlLink: FC<SourceProps> = ({ url }) => {
  if (!url) {
    return <div className="invisible">Image source</div>
  }

  const isURL = isValidHttpUrl(url)

  const newUrl = url.startsWith('http') ? url : `https://${url}`

  return (
    <>
      {isURL ? (
        <a className="text-blue-500" href={newUrl} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ) : (
        url
      )}
    </>
  )
}

export default UrlLink
