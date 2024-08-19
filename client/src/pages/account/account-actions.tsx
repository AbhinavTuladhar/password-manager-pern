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
        <button onClick={deleteAccount} className="rounded-lg bg-red-500 px-4 py-2">
          {' '}
          DELETE
        </button>
      </BaseModal>
    </div>
  )
}

export default AccountActions
