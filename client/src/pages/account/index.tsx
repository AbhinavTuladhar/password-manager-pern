import AnimatedPage from '@/components/animated-page'
import AccountService from '@/services/account.service'
import { useQuery } from '@tanstack/react-query'

import AccountTable from './account-table'

const AccountList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accountList'],
    queryFn: AccountService.getAccounts,
  })

  if (isLoading) {
    return <AnimatedPage>Loading...</AnimatedPage>
  }

  if (isError) {
    return <AnimatedPage>Error</AnimatedPage>
  }

  if (!data) {
    return <AnimatedPage>No data</AnimatedPage>
  }

  return (
    <AnimatedPage className="space-y-10 py-4">
      <h1 className="text-center text-4xl font-bold">List of accounts</h1>
      <AccountTable data={data.data} />
    </AnimatedPage>
  )
}

export default AccountList
