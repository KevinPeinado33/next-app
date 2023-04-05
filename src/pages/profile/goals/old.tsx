import { Typography } from '@mui/material'

import { AuthLayout } from '~/modules/common/components/layouts'

const GoalOldPage = () => {
  return (
    <AuthLayout
      description='Metas a donde se quiere llegar como usuario'
    >
      <Typography>Mis Metas pasadas</Typography>
    </AuthLayout>
  )
}

export default GoalOldPage
