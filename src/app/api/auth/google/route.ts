'use server';
// app/api/auth/google/route.ts

import { URL_PLATFORM } from '@/src/constants';
import { GOOGLE_CLIENT_ID } from '@/src/constants/env';
import { NextResponse } from 'next/server'

export async function GET() {

    const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: `${URL_PLATFORM}/api/auth/google/callback`,
        response_type: 'code',
        scope: 'openid email profile',
        prompt: 'select_account',
    })

    return NextResponse.redirect(
        `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    )
}
