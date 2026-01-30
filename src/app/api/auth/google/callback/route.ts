// 'use server';

// // app/api/auth/google/callback/route.ts
// import { URL_API, URL_PLATFORM } from '@/src/constants'
// import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PLATFORM_DOMAIN } from '@/src/constants/env'
// import { NextRequest, NextResponse } from 'next/server'

// export async function GET(req: NextRequest) {
//     try {
//         const code = req.nextUrl.searchParams.get('code')
//         if (!code) return NextResponse.redirect('/login')

//         // 1. troca code por token
//         const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: new URLSearchParams({
//                 client_id: GOOGLE_CLIENT_ID,
//                 client_secret: GOOGLE_CLIENT_SECRET,
//                 redirect_uri: `${URL_PLATFORM}/api/auth/google/callback`,
//                 grant_type: 'authorization_code',
//                 code,
//             }),
//         })

//         const tokens = await tokenRes.json()

//         // 2. pega dados do usuário
//         const userRes = await fetch(
//             'https://www.googleapis.com/oauth2/v3/userinfo',
//             {
//                 headers: {
//                     Authorization: `Bearer ${tokens.access_token}`,
//                 },
//             }
//         )

//         const googleUser = await userRes.json()

//         const serverRes = await fetch(`${URL_API}/auth/providers/google`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 email: googleUser.email,
//                 firstName: googleUser.given_name,
//                 lastName: googleUser.family_name,
//                 sub: googleUser.sub,
//                 image: googleUser.picture ?? undefined
//             }),
//         });

//         const { token } = await serverRes.json() as { token: string };

//         if (!serverRes.ok) {
//             console.error('Erro ao autenticar no servidor:');
//             return NextResponse.redirect('/login');
//         }

//         const res = NextResponse.redirect(`${URL_PLATFORM}/dashboard`)

//         const IS_PRODUCTION = process.env.NODE_ENV === 'production';

//         res.cookies.set('auth_token', token, {
//             httpOnly: true,
//             secure: IS_PRODUCTION,
//             sameSite: IS_PRODUCTION ? 'none' : 'lax',
//             maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//             path: '/',
//             domain: IS_PRODUCTION ? `.${PLATFORM_DOMAIN}` : 'localhost',
//         })

//         return res
//     } catch (error) {
//         console.error('Erro no callback do Google:', error);
//         return NextResponse.json({ error: 'Erro ao processar o callback do Google.' }, { status: 500 });
//     }
// }
'use server'

import { NextRequest, NextResponse } from 'next/server'
import { URL_API, URL_PLATFORM } from '@/src/constants'
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    PLATFORM_DOMAIN,
} from '@/src/constants/env'

export async function GET(req: NextRequest) {
    try {
        const code = req.nextUrl.searchParams.get('code')
        if (!code) {
            return NextResponse.redirect(`${URL_PLATFORM}/login`)
        }

        // 1️⃣ Troca code por access token
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: GOOGLE_CLIENT_ID,
                client_secret: GOOGLE_CLIENT_SECRET,
                redirect_uri: `${URL_PLATFORM}/api/auth/google/callback`,
                grant_type: 'authorization_code',
                code,
            }),
        })

        if (!tokenRes.ok) {
            console.error('Erro ao trocar code por token')
            return NextResponse.redirect(`${URL_PLATFORM}/login`)
        }

        const tokens = await tokenRes.json()

        // 2️⃣ Pega dados do usuário
        const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
            },
        })

        if (!userRes.ok) {
            console.error('Erro ao obter dados do usuário Google')
            return NextResponse.redirect(`${URL_PLATFORM}/login`)
        }

        const googleUser = await userRes.json()

        const firstName = googleUser?.family_name ? googleUser.given_name : googleUser?.name.split(' ')[0];
        const lastName = googleUser?.family_name ? googleUser.family_name : googleUser?.name.split(' ')[1] || '.';
        // 3️⃣ Envia para o backend (Express)
        const serverRes = await fetch(`${URL_API}/auth/providers/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: googleUser.email,
                firstName,
                lastName,
                sub: googleUser.sub,
                image: googleUser.picture ?? undefined,
            }),
        })

        if (!serverRes.ok) {
            console.error('Erro ao autenticar no backend')
            return NextResponse.redirect(`${URL_PLATFORM}/login`)
        }

        const { token } = (await serverRes.json()) as { token: string }

        if (!token) {
            console.error('Token não retornado pelo backend')
            return NextResponse.redirect(`${URL_PLATFORM}/login`)
        }

        // 4️⃣ Cria cookie (BFF)
        const IS_PRODUCTION = process.env.NODE_ENV === 'production'

        const res = NextResponse.redirect(`${URL_PLATFORM}/dashboard`)

        const cookieOptions: any = {
            httpOnly: true,
            secure: IS_PRODUCTION,
            sameSite: IS_PRODUCTION ? 'none' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/',
        }

        // ⚠️ domain apenas em produção
        if (IS_PRODUCTION) {
            cookieOptions.domain = `.${PLATFORM_DOMAIN}`
        }

        console.log(token);
        res.cookies.set('auth_token', token, cookieOptions)

        return res
    } catch (error) {
        console.error('Erro no callback do Google:', error)
        return NextResponse.redirect(`${URL_PLATFORM}/login`)
    }
}

