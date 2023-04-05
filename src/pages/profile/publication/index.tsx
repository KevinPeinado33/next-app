import { Typography } from '@mui/material'

import { AuthLayout } from '~/modules/common/components/layouts'

const PublicationPage = () => {
  return (
    <AuthLayout
      description='Publicaciones personales'
    >
      <Typography>Mis Publicaciones</Typography>
    </AuthLayout>
  )
}

export default PublicationPage
