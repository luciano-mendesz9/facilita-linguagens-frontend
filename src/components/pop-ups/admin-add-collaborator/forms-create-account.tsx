'use client';
import { useEffect, useState } from "react";
import { CopyIcon, EyeIcon, EyeOffIcon, RefreshCcwIcon } from "lucide-react";
import { USER_PERMISSIONS, USER_ROLES } from "@/src/constants";
import PermissionComponents from "./permissions-component";
import { sendAdminLinkRequest } from "./actions";
import Button from "../../members/button";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import toast from "react-hot-toast";

export default function FormsCreateAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(new Set());
    const [fetchSuccess, setFetchSuccess] = useState(false);

    const { fetchCollaborators } = useDatabase();

    useEffect(() => generatePassword(), []);

    function generatePassword(size = 10) {
        setGenerating(true)
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";
        let pass = '';
        for (let i = 0; i < size; i++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setPassword('')
        setTimeout(() => {
            setGenerating(false)
            setPassword(pass);
        }, 500)

    }

    async function copyToClipboard() {
        if (!password) return;
        await navigator.clipboard.writeText(password);
        toast.success('Senha copiada!')
    }

    async function addCollaborator() {

        if (!firstName) return toast.error('Preencha o Nome');
        if (!lastName) return toast.error('Preencha o Sobrenome');

        if (!email) return toast.error('Preencha o e-mail');
        if (!email.includes('.com') || !email.includes('@')) return toast.error('Preencha um e-mail válido')

        setIsLoading(true);
        const toastId = toast.loading("Adicionando colaborador, aguarde...");
        const res = await sendAdminLinkRequest({
            data: {
                isCreateAccount: true,
                user: {
                    email,
                    password,
                    firstName,
                    lastName,
                },
                config: {
                    isSuperAdmin: true,
                    permissions: [],
                    role: 'DESENVOLVEDOR'
                }
            }
        })

        setIsLoading(false)
        if (!res) {
            return toast.error('Ocorreu um erro inesperado! Se o erro persistir, solicite ajuda técnica.')
        }


        fetchCollaborators();
        setFetchSuccess(true);

        toast.dismiss(toastId);
        toast.success('Colaborador adicionado com sucesso!')
        setEmail('');

        setFirstName('');
        setLastName('');
        setPassword('');

    }

    if (fetchSuccess) {
        return (
            <div className="w-[60%] m-auto mt-5">
                <p className="text-[18px] text-center mt-7 text-gray-700 mb-10">
                    <strong>Adicionado com Sucesso! ✅</strong>
                    O <i>Status</i> da conta do colaborador foi ajustada como <span className="text-yellow-600 font-medium">PENDENDTE</span>,
                    por isso, ele/a recebeu uma notificação no e-mail informado para acessar sua conta. <br /><br /> <strong className="text-red-800">⚠️ ATENÇÃO: </strong>
                    A senha de acesso foi informada no e-mail enviado, instrua-o a trocá-la nas configurações com <span className="font-semibold">URGÊNCIA</span> após o login!
                    <br /> <br />
                    <span className="text-[14px]">Se o colaborador não aparecer na lista, atualize a página 😉</span>
                </p>
                <Button title="Cadastrar Novo Colaborador" styles="w-full" action={() => setFetchSuccess(false)} />
            </div>
        )
    }

    return (
        <form className="w-[60%] m-auto mt-5">
            <p className="text-[14px] text-center mt-7 text-gray-700 mb-10">
                <strong>ATENÇÃO: </strong>
                O colaborador <strong>NÃO</strong> pode possuir uma conta no sistema com o e-mail que
                você informar. Ele receberá uma notificação no endereço informado
                alertando o vínculo e recebendo a senha de acesso. Ao fazer login, ele/a poderá
                trocar a senha aleatória de acesso, criada neste momento, nas configurações.
            </p>
            <div className="flex flex-col gap-2">
                <input
                    disabled={isLoading}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail do usuário"
                    className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md"
                />
                <input
                    disabled={isLoading}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Nome do usuário. Ex: João"
                    className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md"
                />
                <input
                    disabled={isLoading}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Sobrenome do usuário. Ex: da Silva"
                    className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md"
                />
            </div>

            {/* PASSWORD */}
            <div className="flex justify-between items-center mt-6">
                <label>Senha de acesso</label>
                <button type="button"
                    onClick={() => generatePassword()}
                    className="flex items-center gap-2 text-blue-500 cursor-pointer">
                    <RefreshCcwIcon size={20} />
                    {generating ? 'Gerando...' : 'Gerar Nova'}
                </button>
            </div>

            <div className="flex items-center justify-between p-3 border-2 border-gray-400 rounded-md mt-2">
                <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                    </button>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder="Gerando..."
                        disabled
                    />
                </div>
                <button type="button" className="cursor-pointer text-gray-500 hover:text-blue-500" onClick={copyToClipboard}>
                    <CopyIcon />
                </button>
            </div>

            <PermissionComponents />
            <Button
                disabled={isLoading}
                styles="w-full mt-5"
                action={addCollaborator}
                title={isLoading ? 'Criando Conta...' : "Criar Conta"}
            />

        </form>
    )
}