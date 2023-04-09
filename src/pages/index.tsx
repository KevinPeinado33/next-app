import { Typography } from '@mui/material'
import { MainLayout } from '~/modules/common/components/layouts'

const Home = () => {
  return (
    <MainLayout
      title='Truequin | Home'
      description='Pagina principal '
    >
      <Typography variant='h1' component='h1' >Busca todo ...</Typography>
    </MainLayout>
  )
}

export default Home
