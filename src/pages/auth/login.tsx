import { Button, Typography } from '@mui/material'
import { loginController } from '~/modules/auth/controllers'

const LoginPage = () => {

  const { 
    onLogin, 
    register,
    handleSubmit,
    errors
  } = loginController()

  return (
    <>

      <form
        noValidate
        onSubmit={ handleSubmit( onLogin ) }
      >
        <Typography>Iniciar sesión</Typography>

        <Button
          type='submit'
          >
          Go!
        </Button> 
      </form>
    </>
  )
}

export default LoginPage
