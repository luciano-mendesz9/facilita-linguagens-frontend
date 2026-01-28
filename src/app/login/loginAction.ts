'use server'

import { URL_SERVER } from '@/src/constants/env';
import UserType from '@/src/types/user.type';
import { cookies } from 'next/headers';
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type LoginState = {
    errors?: {
        email?: string
        password?: string
        credentialsError?: boolean;
    },
    logged?: boolean;
    user?: UserType;
}

export async function loginAction(_: LoginState, formData: FormData): Promise<LoginState> {
    try {
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const parsed = loginSchema.safeParse(data);

        if (!parsed.success) {
            const errors: LoginState['errors'] = {}

            parsed.error.issues.forEach(issue => {
                const field = issue.path[0]

                if (field === 'email' || field === 'password') {
                    errors[field] = issue.message
                }
            })

            return { errors }
        }

        const response = await fetch(`${URL_SERVER}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(parsed.data)
        });

        console.log(response);

        if (response.status === 500) throw new Error('Internal Server Error - Login');

        if (!response.ok) {
            return {
                errors: {
                    credentialsError: true
                }
            }
        }

        const setCookie = response.headers.get('set-cookie')

        if (setCookie) {
            const token = setCookie
                .split(';')
                .find(v => v.startsWith('auth_token='))
                ?.replace('auth_token=', '')

            if (token) {
                const cookiesConfig = await cookies();
                cookiesConfig.set({
                    name: 'auth_token',
                    value: token,
                    httpOnly: true,
                    sameSite: 'lax',
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,
                });
            }
        }

        const user = await response.json();

        return { logged: true, user }

    } catch {
        return {
            errors: {
                password: 'Desculpa! Ocorreu um erro inexperado. Tente novamente.',
            },
        }
    }
}
