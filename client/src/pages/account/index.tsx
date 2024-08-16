import { motion } from 'framer-motion'

import AccountService from '@/services/account.service'
import { useQuery } from '@tanstack/react-query'

import AccountTable from './account-table'

const AccountList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accountList'],
    queryFn: AccountService.getAccounts,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!data) {
    return <div>No data</div>
  }

  return (
    <motion.div
      key="accountList"
      initial={{ opacity: 0, transitionDuration: '0.5s' }}
      animate={{ opacity: 1, transitionDuration: '0.5s' }}
      exit={{ opacity: 0, transitionDuration: '0.5s' }}
      className="space-y-10 py-4"
    >
      <h1 className="text-center text-4xl font-bold">List of accounts</h1>
      <AccountTable data={data.data} />
    </motion.div>
  )
}

export default AccountList
