import { NextRequest, NextResponse } from "next/server";
import { URL_SERVER } from "@/src/constants/env";
import { cookies } from "next/headers";
import { getCookieToken } from "@/src/functions";

export async function GET(req: NextRequest) {
    try {

        const token = await getCookieToken();
        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { searchParams } = new URL(req.url);
        const cursor = searchParams.get("cursor");
        const limit = searchParams.get("limit");

        const url = new URL(`${URL_SERVER}/users`);

        if (cursor) {
            url.searchParams.append("cursor", cursor);
        }

        if (limit) {
            url.searchParams.append("limit", limit);
        }

        const res = await fetch(url.toString(), {
            method: "GET",
            headers: {
                Cookie: `auth_token=${token}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        const data = await res.json();

        return NextResponse.json(data, { status: res.status });

    } catch (error) {
        console.error("API /users error:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}