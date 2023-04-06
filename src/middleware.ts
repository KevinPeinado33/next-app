import { type NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export const middleware = async (request: NextRequest) => {

    const previousPage = request.nextUrl.pathname

    try {

        const token = request.cookies.get('x-token')?.value ?? ''

        console.log({ token })
    
        await jwtVerify( 
            token, 
            new TextEncoder().encode( process.env.JWT_SECRET_SEED ) 
        )

        return NextResponse.next()

    } catch ( error ) {
        return NextResponse.redirect(
            new URL(`/auth/login?p=${ previousPage }`, request.url)
        )
    }

}

export const config = {
    matcher: [
        '/profile/:path*'
    ]
}
