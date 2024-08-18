import AnimatedPage from '@/components/animated-page'

import AccountForm from './account-form'

const AddAccount = () => {
  return (
    <AnimatedPage className="flex flex-1 flex-col">
      <h1> Add account</h1>
      <div className="grid h-full flex-1 place-items-center">
        <AccountForm />
      </div>
    </AnimatedPage>
  )
}

export default AddAccount
