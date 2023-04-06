import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { 
    AppBar, 
    Toolbar, 
    Link, 
    Typography, 
    Box,
    Button,
    IconButton,
    Badge,
    InputAdornment,
    Input,
    Avatar
} from '@mui/material'
import {
    ShoppingBagOutlined as ShoppingIcon,
    SearchOutlined as SearchIcon,
    NotificationsNoneOutlined as NotificationIcon
} from '@mui/icons-material'

import { RootState } from '../../data'

export const Navbar = () => {

    const { asPath, push } = useRouter()

    const { isLoggedIn } = useSelector( ( state: RootState ) => state.auth )

    return (
        <AppBar >
            <Toolbar>

                <Link  
                    component={ NextLink }
                    href='/'
                    passHref
                    underline='none' 
                    display='flex' 
                    alignContent='center' 
                >
                    <Typography variant='h6' >Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }} >Shop</Typography>
                </Link>

                <Box flex={ 1 } />

                <Button
                    color={asPath === '/category/women' ? 'secondary' : 'primary'}
                >
                    Categoria 1
                </Button>

                <Button
                    color={asPath === '/category/women' ? 'secondary' : 'primary'}
                >
                    Categoria 2
                </Button>

                <Button
                    color={asPath === '/category/women' ? 'secondary' : 'primary'}
                >
                    Categoria 3
                </Button>

                <Box flex={ 1 } />

                <IconButton
                    onClick={ () => console.log('b') }
                >
                    <SearchIcon />
                </IconButton>

                <IconButton
                    onClick={ () => console.log('b') }
                >
                    <Badge
                        badgeContent={ '9+' }
                        color='secondary'
                    >
                        <ShoppingIcon />
                    </Badge>
                </IconButton>

                {
                    isLoggedIn && (
                        <Box>
                            <IconButton
                                onClick={ () => console.log('b') }
                            >
                                <NotificationIcon />
                            </IconButton>

                            <IconButton
                                onClick={ () => console.log('a') }
                            >
                                <Avatar alt='Cindy Baker' src='https://i.pinimg.com/550x/ef/38/a1/ef38a13545e0b84a4e70dd4cd9b8c9d6.jpg' />
                            </IconButton>
                        </Box>
                    )
                }

                {
                    !isLoggedIn && (

                        <Link
                            component={ NextLink }
                            href='/auth/login'
                        >
                            <Button>
                                Ir a Truequín
                            </Button>
                        </Link>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}