import { FC, InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form'

import { RegisterFields, RegisterProps } from '../../types/forms'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: RegisterFields
  register: UseFormRegister<RegisterProps>
}

const Input: FC<InputFieldProps> = ({ label, name, register, ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        {...register(name)}
        className="peer w-full border-b border-b-white bg-transparent pb-2 focus:outline-none"
      />
      <label className="absolute left-0 top-0 text-slate-400 duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white">
        {label}
      </label>
    </div>
  )
}

export default Input
