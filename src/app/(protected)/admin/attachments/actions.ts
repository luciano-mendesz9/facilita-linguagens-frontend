'use server';

import { URL_SERVER } from "@/src/constants/env";
import { getCookieToken } from "@/src/functions";
import { success } from "zod";

export async function createNewGenre(data: { creatorName: string, color: string, name: string }) {
    try {

        const token = await getCookieToken();
        const url = `${URL_SERVER}/attachments/genres`;

        if (!token) {
            return { success: false };
        }

        const res = await fetch(url, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                Cookie: `auth_token=${token}`,
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });

        const json = await res.json();

        console.log(json);

        return { success: res.ok }

    } catch (error) {
        return { success: false };
    }
}