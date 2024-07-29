import { FC, PropsWithChildren } from 'react'

const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-container space-y-8 rounded-md bg-indigo-700 p-8 shadow-md shadow-slate-600">
      {children}
    </div>
  )
}

export default FormContainer
