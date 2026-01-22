'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginForms from './loginForms';
import RegisterForms from './registerForms';

export default function SignAuth() {
    const searchParams = useSearchParams();
    const [screen, setScreen] = useState<'login' | 'register'>('login');

    useEffect(() => {
        const register = searchParams.get('register');
        setScreen(register === 'true' ? 'register' : 'login');
    }, [searchParams]);

    return (
        <div>
            <h1 className='text-2xl font-semibold'>Tela de {screen}</h1>

            <button
                onClick={() => setScreen(screen === 'login' ? 'register' : 'login')}
                className='p-3 bg-blue-400 rounded-md cursor-pointer text-white mt-4 mb-8'
            >ir para tela de {screen === 'login' ? 'Cadastro' : 'Login'}
            </button>

            {screen === 'login' ? <LoginForms /> : <RegisterForms />}
        </div>
    );
}
