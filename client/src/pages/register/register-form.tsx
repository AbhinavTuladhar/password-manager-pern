import { useForm } from 'react-hook-form'

import FormContainer from '@/components/form-container'
import Input from '@/components/input'
import AuthService from '@/services/auth.service'
import { RegisterProps } from '@/types/forms'
import { useMutation } from '@tanstack/react-query'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<RegisterProps>()

  const { mutate } = useMutation({
    mutationFn: AuthService.register,
    onSuccess: () => {
      console.log('Success!')
      reset()
    },
    onError: () => {
      console.log('Error!')
    },
  })

  const onSubmit = (data: RegisterProps) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        message: 'Passwords do not match',
      })
      return
    }
    mutate(data.password)
  }

  return (
    <FormContainer>
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
    </FormContainer>
  )
}

export default RegisterForm
