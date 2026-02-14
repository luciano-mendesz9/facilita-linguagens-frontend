'use client';

import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function useLogout() {

    const router = useRouter();

    function logout() {

        document.cookie = `
            auth_token=;
            path=/;
            expires=Thu, 01 Jan 1970 00:00:00 GMT;
        `;

        router.replace('/login');
        router.refresh();
    }

    return logout;
}

export default function LogoutButton() {
    const logout = useLogout();
    return (
        <button onClick={logout} className="cursor-pointer hover:text-yellow-300 text-white">
            <LogOutIcon size={36} />
        </button>
    )
}
