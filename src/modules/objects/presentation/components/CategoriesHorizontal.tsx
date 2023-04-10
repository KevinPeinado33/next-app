import { Box } from '@mui/material'

import { CategoryChip } from '.'

const categories = [
    'Ropa',
    'Calzado',
    'Accesorios',
    'Electrónica',
    'Hogar',
    'Juguetes',
    'Alimentos',
    'Bebidas',
    'Salud y Belleza',
    'Automóviles',
    'Deportes',
    'Mascotas'
]

export const CategoriesHorizontal = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '6px',
                    height: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#a9a9a9',
                    borderRadius: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#f0f0f0',
                },
                scrollbarWidth: 'thin',
                '-ms-overflow-style': 'none',
                scrollbarColor: '#a9a9a9 #f0f0f0',
            }}
        >
            <CategoryChip nameCategory='todos' isSelected />

            {
                categories.map( category => (
                    <CategoryChip 
                        key={ category } 
                        nameCategory={ category } 
                    />
                ))
            }
        </Box>
    )
}
