import { LogOutIcon } from "lucide-react";
//import { useRouter } from "next/navigation";

export default function LogoutButton() {
    //const router = useRouter();
    const handleLogout = async () => {

        // if (!confirm('Tem certeza que deseja sair da sua conta?')) return;

        // const res = await fetch(`${URL_SERVER}/auth/logout`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     credentials: 'include'
        // });

        // if (!res.ok) {
        //     alert('Algo deu errado ao efetuar o logout.')
        // }

        //router.replace('/');

    }

    return (
        <button className="cursor-pointer hover:text-yellow-300 text-white">
            <LogOutIcon size={36} />
        </button>
    )
}
