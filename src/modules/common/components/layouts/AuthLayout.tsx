import { FC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    title?      : string
    description : string
    children    : ReactNode
}

export const AuthLayout: FC< Props > = ({ 
    title = 'Truequin | Admin', 
    description, 
    children 
}) => {
    return (
        <>

            <Head>

                <title>{ title }</title>

                <meta name='description' content={ description } />
                <meta name='og:title' content={ title } />
                <meta name='og:description' content={ description } />

            </Head>

            {/* Navbar */}

            {/* Menu */}

            { children }

        </>
    )
}
