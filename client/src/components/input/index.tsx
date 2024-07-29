import { InputHTMLAttributes, useState } from 'react'
import type { FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import EyeIcon from '@/assets/eye-icon.svg'

interface GenericInputProps<T extends object> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  register: UseFormRegister<T>
  error: FieldError | undefined
  options?: RegisterOptions<T, Path<T>>
}

const Input = <T extends object>({
  type,
  options,
  name,
  register,
  error,
  ...props
}: GenericInputProps<T>) => {
  const [inputType, setInputType] = useState(type)

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          {...props}
          {...register(name, options)}
          type={inputType}
          className="peer w-full border-b border-b-white bg-transparent pb-2 focus:outline-none"
        />
        {type === 'password' ? (
          <img
            src={EyeIcon}
            className="absolute right-0 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
            onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
          />
        ) : null}
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
