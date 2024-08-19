import { FC } from 'react'
import { toast } from 'react-toastify'

import BaseModal from '@/components/modal'
import useModal from '@/hooks/useModal'
import AccountService from '@/services/account.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface ActionsProps {
  id: string
}

const AccountActions: FC<ActionsProps> = ({ id }) => {
  const { closeModal, isOpen, openModal } = useModal()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: AccountService.deleteAccount,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        refetchType: 'all',
        stale: true,
      })
      await queryClient.refetchQueries({
        queryKey: ['accountList'],
      })
      toast.success('Account deleted successfully')
    },
    onError: () => {
      toast.error('Something went wrong')
    },
  })

  const deleteAccount = () => {
    mutate(id)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal}>Delete </button>
      <BaseModal closeModal={closeModal} isOpen={isOpen}>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-center text-2xl font-bold">
            Are you sure you want to delete this account?
          </h1>
          <div className="flex gap-x-4">
            <button
              onClick={closeModal}
              className="rounded-full border border-gray-200 px-10 py-4 duration-300 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={deleteAccount}
              className="rounded-full bg-red-500 px-10 py-4 text-white duration-300 hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </BaseModal>
    </div>
  )
}

export default AccountActions
