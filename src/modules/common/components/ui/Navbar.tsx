import NextLink from 'next/link'
import { useRouter } from 'next/router'
import NextImage from 'next/image'
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
    Avatar,
    colors
} from '@mui/material'
import {
    QuestionAnswerOutlined as MessageIcon,
    SearchOutlined as SearchIcon,
    NotificationsNoneOutlined as NotificationIcon,
    AddOutlined as AddIcon
} from '@mui/icons-material'

import logo from '../../../../../public/img/logo.png'
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
                    <NextImage 
                        alt='logo_app'
                        width={45}
                        height={45}
                        src={ logo }
                    />
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
                    sx={{ 
                        backgroundColor: colors.purple[600], 
                        color: 'white',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                        marginRight: '5px'
                    }}
                    disabled={false}
                    size='medium'                                
                >
                    <AddIcon />
                </IconButton>

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
                        <MessageIcon />
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