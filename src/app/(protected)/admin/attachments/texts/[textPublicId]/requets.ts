'use server';

import { URL_SERVER } from "@/src/constants/env";
import { getCookieToken } from "@/src/functions";

export type TextInfoResponseType = {
    publicId: string
    title: string
    authorName: string
    referenceUrl: string | null
    isImageOnly: boolean
    createdAt: string

    genre: {
        name: string
        color: string
    }

    creator: {
        firstName: string
        lastName: string
        publicId: string | null
        image: string | null
    } | null

    content: {
        id: string,
        textInfoId: number,
        content: string
    } | undefined

    images: {
        id: string
        textInfoId: number
        url: string
    }[]
}

export async function fetchTextDetails(textPublicId: string) {
    try {

        const token = await getCookieToken();
        if (!token) return null;

        const res = await fetch(`${URL_SERVER}/attachments/texts/${textPublicId}/details`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`
            },
            credentials: 'include'
        });


        if (!res.ok) {
            throw new Error('Failed to fetch text details');
        }

        const data = await res.json() as TextInfoResponseType;
        return data;

    } catch (error) {
        return null
    }
}