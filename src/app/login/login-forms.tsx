'use client';
import { EyeClosedIcon, EyeIcon, LockKeyholeIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export default function LoginForms() {

    const [showPass, setShowPass] = useState(false);

    return (
        <form className="mb-3">
            <label className="font-medium" htmlFor="email">E-mail</label>
            <div className="flex items-center gap-3 border-2 border-gray-400 p-2.5 rounded-[10px] mt-1">
                <MailIcon color="gray"/>
                <input type="email" name="email" id="email" placeholder="seu@email.com" required
                className="w-full outline-none"
                />
            </div>
            <br />
            <label className="font-medium" htmlFor="password">Senha</label>
            <div className="flex items-center gap-3 border-2 border-gray-400 p-2.5 rounded-[10px] mt-1">
                <LockKeyholeIcon color="gray"/>
                <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="********" required
                className="w-full outline-none"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="cursor-pointer">{showPass ? <EyeIcon/> : <EyeClosedIcon />}</button>
            </div>
            <button type="submit" className="bg-blue-500 w-full p-2.5 rounded-[10px] mt-4 text-white font-medium cursor-pointer hover:bg-blue-600">ENTRAR</button>
        </form>
    )
}