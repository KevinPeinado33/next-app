import { FC } from 'react'
import { Chip, Box } from '@mui/material'

interface Props {
    nameCategory    : string
    isSelected? : boolean
}
export const CategoryChip: FC< Props > = ({ nameCategory: category, isSelected = false }) => {

    const colorBadge = isSelected ? 'secondary' : 'default'

    return (
        <>
            <Chip 
                color={ colorBadge } 
                sx={{ 
                    marginBottom: '5px',
                    cursor: 'pointer' 
                }} 
                label={ category } 
            />

            <Box sx={{ marginRight: '5px' }} />

        </>
    )
}
