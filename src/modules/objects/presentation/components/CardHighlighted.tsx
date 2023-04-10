import { Card, CardContent, Typography } from '@mui/material'

export const CardHighlighted = () => {
  return (
    <Card
        sx={{ backgroundColor: '#21B6B6'}}
    >
        <CardContent>
            <Typography 
                variant='h4' 
                color='white'
                align='center'
            >
                Objetos tendencia
            </Typography>
        </CardContent>
    </Card>
  )
}
