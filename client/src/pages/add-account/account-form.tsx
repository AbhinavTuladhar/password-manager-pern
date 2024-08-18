import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import FormContainer from '@/components/form-container'
import Input from '@/components/input'
import useAuth from '@/hooks/useAuth'
import AccountService from '@/services/account.service'
import { AddAccountProps } from '@/types/forms'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddAccountProps>()
  const queryClient = useQueryClient()
  const { userId } = useAuth()

  const { mutate } = useMutation({
    mutationFn: AccountService.createAccount,
    onError: () => {
      toast.error('Something went wrong!')
      console.log('Error!')
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['accountList'],
        refetchType: 'inactive',
      })
      toast.success('Account added successfully')
      reset()
    },
  })

  const onSubmit = (data: Omit<AddAccountProps, 'userId'>) => {
    mutate({ ...data, userId })
  }

  return (
    <FormContainer>
      <div className="space-y-5">
        <h2 className="text-xl font-bold"> Add account </h2>
        <span className="text-sm"> Please enter all your information.</span>
      </div>
      <form className="flex flex-col gap-y-1" onSubmit={handleSubmit(onSubmit)}>
        <Input<AddAccountProps>
          error={errors.websiteName}
          name="websiteName"
          register={register}
          placeholder="Website name"
          options={{
            required: {
              value: true,
              message: 'Please enter the website name.',
            },
          }}
        />
        <Input<AddAccountProps>
          error={errors.websiteUrl}
          name="websiteUrl"
          register={register}
          placeholder="Website url"
          options={{
            required: {
              value: true,
              message: 'Please enter the website url.',
            },
          }}
        />
        <Input<AddAccountProps>
          error={errors.email}
          name="email"
          register={register}
          placeholder="Email"
          options={{
            required: {
              value: true,
              message: 'Please enter the email.',
            },
          }}
        />
        <Input<AddAccountProps>
          error={errors.userName}
          name="userName"
          register={register}
          placeholder="Username (if any)"
        />
        <Input<AddAccountProps>
          error={errors.password}
          name="password"
          register={register}
          placeholder="Password"
          options={{
            required: {
              value: true,
              message: 'Please enter your password.',
            },
          }}
        />
        <button className="self-center rounded-lg bg-blue-400 px-10 py-2 duration-300 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </FormContainer>
  )
}

export default AccountForm
