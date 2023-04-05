import { Typography } from '@mui/material'

import { AuthLayout } from '~/modules/common/components/layouts'

const GoalActivePage = () => {
  return (
    <AuthLayout
      description='Metas a donde se quiere llegar como usuario'
    >
      <Typography>Mis Metas activas</Typography>
    </AuthLayout>
  )
}

export default GoalActivePage
