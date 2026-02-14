'use client';
import { useEffect, useState } from "react";
import { CopyIcon, EyeIcon, EyeOffIcon, RefreshCcwIcon } from "lucide-react";
import { USER_PERMISSIONS, USER_ROLES } from "@/src/constants";

export default function FormsCreateAccount() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
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

    function togglePermission(permission: string) {
        if (isSuperAdmin) return;

        setSelectedPermissions(prev => {
            const newSet = new Set(prev);
            newSet.has(permission)
                ? newSet.delete(permission)
                : newSet.add(permission);
            return newSet;
        });
    }


    function handleSuperAdminToggle() {
        setIsSuperAdmin(prev => {
            const newState = !prev;
            if (newState) setSelectedPermissions(new Set());
            return newState;
        });
    }

    return (
        <form className="w-[60%] m-auto mt-5">
            <p className="text-[14px] text-center mt-7 text-gray-700 mb-10">
                <strong>ATENÇÃO: </strong>
                O colaborador <strong>NÃO</strong> pode possuir uma conta no sistema com o e-mail que
                você informar. Ele receberá uma notificação no endereço informado para
                aceitar o vínculo. Ao aceitar a conexão e fazer o login, ele será instruído
                para trocar sua senha aleatória de acesso criada neste momento.
            </p>
            <input
                type="email"
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

            {/* ROLE */}
            <select className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md mt-4">
                <option value="">Selecionar Cargo</option>
                {USER_ROLES.map(role => (
                    <option key={role} value={role}>{role}</option>
                ))}
            </select>

            {/* SUPER ADMIN */}
            <div className="flex items-center gap-3 mt-6">
                <input
                    type="checkbox"
                    checked={isSuperAdmin}
                    onChange={handleSuperAdminToggle}
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                />
                <span className="font-medium">Marcar como Super Admin</span>
            </div>

            {!isSuperAdmin ? (
                <>
                    <span className="block text-gray-700 mt-6 font-semibold">
                        Permissões do usuário:
                    </span>

                    <div className="grid grid-cols-3 gap-3 mt-3">

                        {USER_PERMISSIONS.map(permission => {

                            const selected = selectedPermissions.has(permission);

                            return (
                                <button
                                    key={permission}
                                    type="button"
                                    onClick={() => togglePermission(permission)}
                                    className={`
                                            p-3 rounded-md border text-sm transition-all
                                            ${selected
                                            ? 'border-blue-500 text-blue-500 bg-blue-500/30'
                                            : 'border-gray-400 text-gray-600 hover:bg-gray-200'}
                                        `}>
                                    {permission}
                                </button>
                            )
                        })}

                    </div>
                </>
            ) : (
                <div className="mt-4 text-sm text-blue-600 bg-blue-500/20 p-4 rounded-md border border-blue-500">
                    Usuários Super Admin possuem todas as permissões possíveis no sistema.
                </div>
            )}

        </form>
    )
}