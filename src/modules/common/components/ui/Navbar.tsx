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
    Avatar,
    colors
} from '@mui/material'
import {
    QuestionAnswerOutlined as MessageIcon,
    SearchOutlined as SearchIcon,
    FavoriteBorderOutlined as FavoritesIcon,
    AddOutlined as AddIcon,
    Person2Outlined as PersonIcon
} from '@mui/icons-material'

import logo from '../../../../../public/img/logo.png'
import { RootState } from '../../data'

export const Navbar = () => {

    const { asPath, push } = useRouter()

    const { isLoggedIn } = useSelector((state: RootState) => state.auth)

    return (
        <AppBar >
            <Toolbar>

                <Link
                    component={NextLink}
                    href='/'
                    passHref
                    underline='none'
                    display='flex'
                    alignContent='center'
                >
                    <Typography variant='h6'>Home</Typography>
                </Link>

                <Button
                    sx={{ marginLeft: '8px' }}
                    color={asPath === '/category/women' ? 'secondary' : 'primary'}
                >
                    Categorias
                </Button>

                <Box flex={1} />

                <IconButton
                    sx={{
                        backgroundColor: colors.purple[600],
                        color: 'white',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                        marginRight: '15px'
                    }}
                    disabled={false}
                    size='medium'
                >
                    <AddIcon />
                </IconButton>

                <Box
                    sx={{ backgroundColor: '#e0e0e0' }}
                    display='flex'
                    width='auto'
                    borderRadius={10}
                >
                    <IconButton
                        onClick={() => console.log('b')}
                        sx={{ marginLeft: '10px' }}
                    >
                        <SearchIcon />
                    </IconButton>

                    {
                        isLoggedIn && (
                            <>
                                <IconButton
                                    onClick={() => console.log('b')}
                                >
                                    <FavoritesIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => console.log('b')}
                                >
                                    <Badge
                                        badgeContent={'9+'}
                                        color='secondary'
                                    >
                                        <MessageIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    onClick={() => console.log('a')}
                                    sx={{ marginRight: '10px' }}
                                >
                                    <Avatar alt='Cindy Baker' src='https://i.pinimg.com/550x/ef/38/a1/ef38a13545e0b84a4e70dd4cd9b8c9d6.jpg' />
                                </IconButton>
                            </>
                        )
                    }

                    {
                        !isLoggedIn && (

                            <Link
                                component={NextLink}
                                href='/auth/login'
                                sx={{ marginRight: '10px' }}
                            >
                                <IconButton>
                                    <PersonIcon />
                                </IconButton>
                            </Link>
                        )
                    }

                </Box>
            </Toolbar>
        </AppBar>
    )
}