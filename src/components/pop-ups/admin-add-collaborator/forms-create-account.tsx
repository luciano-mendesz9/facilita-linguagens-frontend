'use client';
import { useEffect, useState } from "react";
import { CopyIcon, EyeIcon, EyeOffIcon, RefreshCcwIcon } from "lucide-react";
import { USER_PERMISSIONS, USER_ROLES } from "@/src/constants";
import PermissionComponents from "./permissions-component";
import { sendAdminLinkRequest } from "./actions";
import Button from "../../members/button";

export default function FormsCreateAccount() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(new Set());

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
        alert('Senha copiada!')
    }

    async function addCollaborator() {

        if(!email) return alert('Preencha o email');
        if(!email.includes('.com') || !email.includes('@')) return alert('Preencha o e-mail válido')

        setIsLoading(true);
        const res = await sendAdminLinkRequest({
            data: {
                email: email,
                isCreateAccount: true,
                password,
                config: {
                    isSuperAdmin: true,
                    permissions: [],
                    role: 'DESENVOLVEDOR'
                }
            }
        })

        setIsLoading(false)
        if (!res) {
            return alert('Ocorreu um erro inesperado! Se o erro persistir, solicite ajuda dos desenvolvedores.')
        }

        /// router.refresh();

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
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail do usuário"
                className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md"
            />

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