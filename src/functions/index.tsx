'use server';

import { cache } from 'react'
import { cookies } from 'next/headers'

import { URL_SERVER } from '../constants/env';
import UserType from '@my-types/user.type'

export const getUser = cache(async () => {

    const token = await getCookieToken();
    if (!token) return null;

    const res = await fetch(`${URL_SERVER}/auth/me`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            Cookie: `auth_token=${token}`
        },
        credentials: 'include'
    })

    if (!res.ok) return null;

    const user = await res.json() as UserType;
    return user
})

export const getCookieToken = async () => {
    const cookie = await cookies();
    const token = cookie.get('auth_token')?.value;

    return token || null;
}


export const getCollaborators = async ({ id }: { id?: string }) => {
    try {

        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/users/collaborators${id ? '?id=' + id : ''}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`
            },
            credentials: 'include'
        });

        if (!res.ok) {
            throw new Error('fetch collaborators error')
        }

        const data = await res.json();

        console.log(data)

        if (id) {
            return [data as UserType];
        }

        return data as UserType[];
    } catch (error) {
        console.log(error)
        return null
    }
}