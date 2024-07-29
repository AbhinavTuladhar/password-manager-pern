import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import AuthService from '../../services/auth.service'
import { RegisterProps } from '../../types/forms'
import Input from '../input'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    // reset,
  } = useForm<RegisterProps>()

  const { mutate } = useMutation({
    mutationFn: AuthService.register,
  })

  const onSubmit = (data: RegisterProps) => {
    mutate(data.password)
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        message: 'Passwords do not match',
      })
      return
    }
    console.log(data)
  }

  return (
    <div className="w-container space-y-12 rounded-md bg-indigo-700 p-8 shadow-md shadow-slate-600">
      <h2 className="text-xl font-bold"> Registration form</h2>
      <form className="flex flex-col gap-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <Input
            minLength={1}
            error={errors.password}
            name="password"
            register={register}
            placeholder="Password"
            type="password"
            options={{
              required: {
                value: true,
                message: 'Please enter your password.',
              },
            }}
          />
          <Input
            minLength={1}
            error={errors.confirmPassword}
            name="confirmPassword"
            register={register}
            placeholder="Confirm password"
            type="password"
            options={{
              required: {
                value: true,
                message: 'Please enter your password confirmation.',
              },
            }}
          />
        </div>
        <button className="self-center rounded-lg bg-blue-400 px-10 py-2 duration-300 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
