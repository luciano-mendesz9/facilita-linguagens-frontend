'use client'

import { EyeClosedIcon, EyeIcon, LockKeyholeIcon, MailIcon } from 'lucide-react'
import { startTransition, useEffect, useState } from 'react'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom'
import { loginAction, LoginState } from './loginAction'
import { useRouter } from 'next/navigation';

const initialState: LoginState = {}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-blue-500 w-full p-2.5 rounded-[10px] mt-4 text-white font-medium cursor-pointer hover:bg-blue-600 disabled:opacity-60"
        >
            {pending ? 'Aguarde...' : 'ENTRAR'}
        </button>
    )
}

export default function LoginForms() {
    const [showPass, setShowPass] = useState(false)
    const [state, formAction] = useActionState(loginAction, initialState);

    const router = useRouter();

    useEffect(() => {
        if (state.logged) {
            startTransition(() => {
                router.refresh()
                router.replace('/dashboard')
            })
        }
    }, [state])

    return (
        <form action={formAction} className="mb-3">
            <label className="font-medium" htmlFor="email">E-mail</label>

            <div className="flex items-center gap-3 border-2 border-gray-400 p-2.5 rounded-[10px] mt-1">
                <MailIcon color="gray" />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full outline-none"
                />
            </div>

            {state?.errors?.email && (
                <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
            )}

            <br />

            <label className="font-medium" htmlFor="password">Senha</label>

            <div className="flex items-center gap-3 border-2 border-gray-400 p-2.5 rounded-[10px] mt-1">
                <LockKeyholeIcon color="gray" />
                <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="********"
                    className="w-full outline-none"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeIcon /> : <EyeClosedIcon />}
                </button>
            </div>

            {state?.errors?.password && (
                <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
            )}
            {state?.errors?.credentialsError && (
                <p className="text-red-500 text-sm mt-1">E-mail ou senha inválidados.</p>
            )}

            <SubmitButton />
        </form>
    )
}
