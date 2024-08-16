import { FC } from 'react'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'

interface PasswordTextProps {
  text: string
}

const PasswordText: FC<PasswordTextProps> = ({ text }) => {
  const notify = () => {
    toast.success('Copied to clipboard!')
  }

  const copyText = () => {
    copy(text, {
      message: 'Text copied to clipboard',
    })
    notify()
  }

  return (
    <div className="relative max-w-[50ch] cursor-pointer truncate" onClick={copyText}>
      <div className="absolute inset-0 rounded-lg bg-gray-300 duration-500 hover:opacity-0" />
      <p>{text}</p>
    </div>
  )
}

export default PasswordText
