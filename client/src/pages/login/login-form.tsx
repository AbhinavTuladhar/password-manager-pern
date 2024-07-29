import { useForm } from 'react-hook-form'

import FormContainer from '@/components/form-container'
import Input from '@/components/input'
import { LoginProps } from '@/types/forms'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>()

  const onSubmit = (data: LoginProps) => {
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
          error={errors.password}
          name="password"
          register={register}
          placeholder="Password"
        />
        <button> Submit! </button>
      </form>
    </FormContainer>
  )
}

export default LoginForm
