'use server';

import { cache } from 'react'
import { cookies } from 'next/headers'

import { URL_SERVER } from '../constants/env';
import UserType from '@my-types/user.type'
import { DataGenreType } from '../types/datas.types';

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

export const deleteCookieToken = async () => {
    const cookie = await cookies();
    cookie.delete('auth_token');
}

export const logout = async () => {
    const token = await getCookieToken();
    if (!token) return null;

    const res = await fetch(`${URL_SERVER}/auth/logout`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Cookie: `auth_token=${token}`
        },
        credentials: 'include'
    });


    return res.ok;
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

        if (id) {
            return [data as UserType];
        }

        return data as UserType[];
    } catch (error) {
        console.log(error)
        return null
    }
}

export const deleteGenre = async ({ id }: { id: number }) => {
    try {
        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/attachments/genres/${id}`, {
            method: 'DELETE',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`
            },
            credentials: 'include'
        });

        if (!res.ok && res.status === 409) {
            return {
                success: false,
                message: 'Não é possível deletar um gênero que possui textos vinculados.'
            }
        } else if (!res.ok) {
            throw new Error('erro ao deletar gênero')
        }

        return {
            success: true,
            message: 'Gênero deletado com sucesso!'
        }

    } catch (error) {
        return {
            success: false,
            message: 'Ocorreu um erro inesperado ao tentar deletar o gênero textual. Tente Novamente.'
        };
    }
}

export const getGenres = async ({ id }: { id?: number }) => {
    try {
        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/attachments/genres${id ? '?id=' + id : ''}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`
            },
            credentials: 'include'
        });

        if (!res.ok) {
            throw new Error('fetch genres error')
        }

        const data = await res.json();

        if (id) {
            return [data as DataGenreType];
        }

        return data as DataGenreType[];
    } catch (error) {
        return null
    }
}


export const getUserByEmail = async ({ email }: { email: string }) => {
    try {

        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/users?email=${email}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`
            },
            credentials: 'include'
        });

        if (!res.ok) {
            console.log(await res.text());
            throw new Error('fetch user by email error')
        }

        const data = await res.json();

        return data as UserType;
    } catch (error) {
        console.log(error)
        return null
    }
}