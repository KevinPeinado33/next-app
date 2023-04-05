import { Typography } from '@mui/material'

import { AuthLayout } from '~/modules/common/components/layouts'

const ProfilePage = () => {
  return (
    <AuthLayout
      description='Pagina principal del usuario'
    >
      <Typography>Perfil</Typography>
    </AuthLayout>
  )
}

export default ProfilePage
