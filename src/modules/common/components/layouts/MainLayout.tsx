import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
    title?      : string
    description : string
    imgFullUrl? : string
    children    : ReactNode
}

export const MainLayout: FC< Props > = ({
    title = 'Truequin',
    description,
    imgFullUrl,
    children
}) => {
    return (
        <>
            <Head>
                
                <title>{ title }</title>

                <meta name='description' content={ description } />
                <meta name='og:title'content={ title } />
                <meta name='og:description' content={ description } />

                { imgFullUrl && ( <meta name='og:image' content={ imgFullUrl } /> ) }

            </Head>

            {/* Navbar */}
            <Navbar />

            {/* Sidebar */}

            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                { children }
            </main>

            {/* Footer */}
        
        </>
    )
}
