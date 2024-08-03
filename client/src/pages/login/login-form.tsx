import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import FormContainer from '@/components/form-container'
import Input from '@/components/input'
import useAuth from '@/hooks/useAuth'
import AuthService from '@/services/auth.service'
import { LoginProps } from '@/types/forms'
import { useMutation } from '@tanstack/react-query'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>()

  const { setIsAuthenticated } = useAuth()

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: AuthService.login,
    onError: () => {
      console.log('Error!')
    },
    onSuccess: () => {
      console.log('Success!')
      setIsAuthenticated(true)

      setTimeout(() => {
        navigate('/')
      }, 1500)
    },
  })

  const onSubmit = (data: LoginProps) => {
    mutate(data.password)
    console.log(data)
  }

  return (
    <FormContainer>
      <div className="space-y-5">
        <h2 className="text-xl font-bold"> Login form</h2>
        <span className="text-sm"> Please enter the master password. </span>
      </div>
      <form className="flex flex-col gap-y-1" onSubmit={handleSubmit(onSubmit)}>
        <Input<LoginProps>
          type="password"
          error={errors.password}
          name="password"
          register={register}
          placeholder="Password"
        />
        <button className="self-center rounded-lg bg-blue-400 px-10 py-2 duration-300 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </FormContainer>
  )
}

export default LoginForm
