import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import NextLink from 'next/link'

import { validations } from '~/modules/auth/utils'
import { loginController } from '~/modules/auth/controllers'

const LoginPage = () => {

  const {
    onLogin,
    register,
    handleSubmit,
    errors,
    isError,
    router
  } = loginController()

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='calc(100vh-200px)'
    >

      <form
        noValidate
        onSubmit={handleSubmit(onLogin)} >

        <Box sx={{ width: 350, padding: '10px 20px' }} >

          <Grid container spacing={2}>
          
            <Grid item xs={12} >
          
              <Typography variant='h1' component='h1'>Iniciar sesión</Typography>
          
              <Chip
                label='No reconocemos ese usuario / constraseña'
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: isError ? 'flex' : 'none' }}
              />
          
            </Grid>
          
            <Grid item xs={12} >
              
              <TextField
                {
                ...register('email', {
                  required: 'Este campo es requerido!',
                  validate: validations.isEmail
                })
                }
                error={!!errors.email}
                helperText={errors.email?.message}
                label='Correo'
                variant='outlined'
                type='email'
                fullWidth
              />
            
            </Grid>
            
            <Grid item xs={12} >
            
              <TextField
                {
                ...register('password', {
                  required: 'Este campo es requerido!',
                  minLength: { value: 6, message: 'Minimo 6 caracteres' }
                })
                }
                error={!!errors.password}
                helperText={errors.password?.message}
                label='Password'
                type='text'
                variant='outlined'
                fullWidth
              />
            
            </Grid>
            
            <Grid item xs={12} >
              
              <Button
                color='secondary'
                className='circular-btn'
                size='large'
                fullWidth
                type='submit'
              >
                Ingresar
              </Button>
            
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='end' >
              
              <NextLink
                href={ router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register' }
                passHref
                legacyBehavior
              >
                <Link underline='always'>
                  No tienes cuenta?
                </Link>
              </NextLink>
            
            </Grid>
          </Grid>
        </Box>
      
      </form>

    </Box>
  )
}

export default LoginPage
