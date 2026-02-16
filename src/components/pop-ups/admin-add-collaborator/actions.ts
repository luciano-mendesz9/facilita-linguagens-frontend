'use server';

import { URL_SERVER } from "@/src/constants/env";
import { getCookieToken } from "@/src/functions";

type Props = {
    data: {
        isCreateAccount: boolean;
        user: {
            email: string;
            firstName: string;
            lastName: string;
            password?: string;

        };
        config: {
            isSuperAdmin: boolean,
            permissions: string[],
            role: 'PROFESSOR' | 'DESENVOLVEDOR' | 'USUARIO'
        }
    }
}

export async function sendAdminLinkRequest({ data }: Props) {
    try {
        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/users/collaborators`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`,
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });

        return res.ok;
    } catch (error) {
        console.log('Erro ao adicionar admin', error);
        return false;
    }
}
