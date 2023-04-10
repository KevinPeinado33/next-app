import { Box, Button, Typography, Grid } from '@mui/material'
import NextImage from 'next/image'

import imgBanner from '../../public/img/banner-principal.png'

import { MainLayout } from '~/modules/common/components/layouts'
import { CategoriesHorizontal, CardHighlighted } from '~/modules/objects/presentation/components'

const Home = () => {
  return (
    <MainLayout
      title='Truequin | Home'
      description='Pagina principal '
    >
      <Box
        style={{
          backgroundColor: '#975EF6',
          color: '#fff',
          padding: '10px 20px',
          borderBottom: '2px solid #ccc',
          fontWeight: 'bold',
          textAlign: 'center',
          borderRadius: '30px'
        }}
      >

        <Typography variant='h1' >
          Intercambia  objetos y da una segunda oportunidad a lo que ya no necesites.
        </Typography>

        <Typography variant='h6'>
          Empieza a soltar para poder avanzar.
        </Typography>

        <Button
          sx={{ backgroundColor: 'white' }}
          size='large'
        >
          Crear meta
        </Button>

        <NextImage
          alt='img-banner'
          src={imgBanner}
          style={{
            width: '50%',
            height: '50%'
          }}
        />

      </Box>
      
      <Box sx={{ marginTop: '15px' }} />
      
      <CategoriesHorizontal />

      <Box sx={{ marginTop: '15px' }} />

         
      <Grid 
        container 
        columns={{ xs: 4, sm: 8, md: 12 }} 
        spacing={{ xs: 2, md: 3 }}
      >

        <CardHighlighted />
        <CardHighlighted />
        <CardHighlighted />
        <CardHighlighted />

      </Grid>


    </MainLayout>
  )
}

export default Home
