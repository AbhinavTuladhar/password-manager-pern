import FormContainer from '../../components/form-container'

const LoginForm = () => {
  return (
    <FormContainer>
      <div className="space-y-5">
        <h2 className="text-xl font-bold"> Login form</h2>
        <span className="text-sm"> Please enter the master password. </span>
      </div>
    </FormContainer>
  )
}

export default LoginForm
