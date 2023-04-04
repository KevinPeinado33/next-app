import { type NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export const middleware = async ( req: NextRequest ) => {

    const previousPage = req.nextUrl.pathname

    if ( previousPage.startsWith('/profile')) {

        const token = req.cookies.get('x-token')?.value || ''

        try { 

            await jwtVerify( 
                token, 
                new TextEncoder().encode( process.env.JWT_SECRET_SEED)
            )

            return NextResponse.next()

        } catch ( error ) {

            return NextResponse.redirect(
                new URL(`/auth/login?p=${previousPage}`, req.url)
            )

        }

    }

}

export const config = {
    matcher: ['/profile/:path*']
}
