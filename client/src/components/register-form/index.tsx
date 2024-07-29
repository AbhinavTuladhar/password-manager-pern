import { useForm } from 'react-hook-form'

import { RegisterProps } from '../../types/forms'
import Input from '../input'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // reset,
  } = useForm<RegisterProps>()

  const onSubmit = (data: RegisterProps) => {
    console.log(data)
  }

  return (
    <div className="w-container space-y-12 rounded-md bg-indigo-700 p-8 shadow-md shadow-slate-600">
      <h2 className="text-xl font-bold"> Registration form</h2>
      <form className="flex flex-col gap-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-14">
          <Input name="password" register={register} label="Password" />
          <Input name="confirmPassword" register={register} label="Confirm password" />
        </div>
        <button className="self-center rounded-lg bg-blue-400 px-10 py-2 duration-300 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
