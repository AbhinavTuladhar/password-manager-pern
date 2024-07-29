import { FC, InputHTMLAttributes } from 'react'
import type { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { RegisterFields, RegisterProps } from '../../types/forms'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: RegisterFields
  register: UseFormRegister<RegisterProps>
  error: FieldError | undefined
  options?: RegisterOptions<RegisterProps, RegisterFields>
}

const Input: FC<InputFieldProps> = ({ options, name, register, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          {...props}
          {...register(name, options)}
          className="peer w-full border-b border-b-white bg-transparent pb-2 focus:outline-none"
        />
      </div>
      {error ? (
        <p className="text-sm text-red-500">{error.message}</p>
      ) : (
        <p className="invisible text-sm"> Error message</p>
      )}
    </div>
  )
}

export default Input
