import { FC, PropsWithChildren } from 'react'

const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-container space-y-8 rounded-md bg-surface-mixed-200 p-8 shadow-md shadow-neutral-800">
      {children}
    </div>
  )
}

export default FormContainer
