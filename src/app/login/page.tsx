'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeftCircle } from 'lucide-react';

import { PLATFORM_NAME } from '@/src/constants';
import { useSearchParams } from 'next/navigation';
import LoginForms from './login-forms';
import RegisterForms from './register-forms';
import Line from '@members-components/line';
import GoogleLogo from '@assets/google.png';

export default function SignAuth() {
    const searchParams = useSearchParams();
    const [screen, setScreen] = useState<'login' | 'register'>('login');
    const [headerContent, setHeaderContent] = useState<{ title: string, description: string } | null>(null);

    const [googleTitleBttn, setGoogleTitleBttn] = useState('Entrar com o Google'); 

    useEffect(() => {
        const register = searchParams.get('register');
        setScreen(register === 'true' ? 'register' : 'login');
    }, [searchParams]);

    useEffect(() => {
        let header = null;

        if (screen === 'login') {
            header = {
                title: 'Bem-vindo de volta',
                description: 'Selecione a ação desejada, preencha o formulário ou escolha sua forma de login para acessar sua conta já existente.'
            }
        } else {
            header = {
                title: 'Junte-se a nós!',
                description: 'Preencha o formulário abaixo para criar sua conta.'
            }
        }

        setHeaderContent(header);
    }, [screen])

    return (
        <div className='bg-white flex shadow-[0_4px_43px_-15px_rgba(0,0,0,0.25)] rounded-[10px] min-h-[96%] md:min-h-[80%] w-[96%] max-w-270'>

            <a href='/' className='fixed top-5 left-5 bg-blue-500 p-1.5 pr-3.5 rounded-[50px] flex items-center gap-2 text-white cursor-pointer hover:bg-blue-600'>
                <ArrowLeftCircle size={35} color='white' />
                Voltar
            </a>

            <div className='flex-1 justify-center flex-col items-center bg-linear-to-tr from-blue-600 to-blue-300 rounded-tl-[10px] rounded-bl-[10px] hidden md:flex'>
                <div className='w-36.25 h-36.25 bg-[#ffffff38]  rounded-2xl shadow-[0_4px_23px_1px_rgba(255,255,255,0.25)] flex justify-center items-center'>
                    <span className='text-[#ffffff7b] text-2xl'><strong>LOGO</strong></span>
                </div>

                <h1 className='text-center font-extrabold text-white text-4xl mt-10'>{PLATFORM_NAME.split(' ')[0].toUpperCase()} <br /> {PLATFORM_NAME.split(' ')[1].toUpperCase()}</h1>
                <span className='text-white text-center mt-5 text-[14px]'>Vamos botar um testinho motivador aqui ou que passe<br />a cara da plataforma</span>

                <div className='flex items-center gap-7 w-full pr-10 pl-10 mt-10 h-20'>
                    <div className='w-full h-full bg-[#ffffff38]  rounded-2xl shadow-[0_4px_23px_1px_rgba(255,255,255,0.25)] flex justify-center items-center'>
                        <span className='text-white text-2xl'><strong>+ TREINOS</strong></span>
                    </div>
                    <div className='w-full h-full bg-[#ffffff38]  rounded-2xl shadow-[0_4px_23px_1px_rgba(255,255,255,0.25)] flex justify-center items-center'>
                        <span className='text-white text-2xl'><strong>+ PROGRESSO</strong></span>
                    </div>
                </div>
            </div>
            <div className='flex-1 overflow-y-auto p-5 md:pl-10 md:pr-10'>
                <h2 className='text-2xl font-semibold mt-10 mb-3'>{headerContent?.title}</h2>
                <span className='text-[14px] text-gray-500'>{headerContent?.description}</span> <br /><br />

                <div className='w-full flex items-center gap-3 mb-5'>
                    <button
                        onClick={() => setScreen('login')}
                        className={`w-full p-3 rounded-[10px] ${screen === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-600'} cursor-pointer font-medium hover:opacity-80`}
                    >
                        Fazer Login
                    </button>
                    <button
                        onClick={() => setScreen('register')}
                        className={`w-full p-3 rounded-[10px] ${screen === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-600'} cursor-pointer font-medium hover:opacity-80`}
                    >
                        Cadastrar-se
                    </button>
                </div>

                {screen === 'login' ? <LoginForms /> : <RegisterForms />}

                <div className='flex items-center gap-2'>
                    <Line />
                    <span>ou</span>
                    <Line />
                </div>

                <button
                    onClick={() =>{ 
                        setGoogleTitleBttn('Aguarde...');
                        window.location.href = '/api/auth/google'
                    }}
                    className='border-2 border-gray-400 rounded-[10px] w-full p-2.5 pl-4 text-gray-500 font-medium mt-3 hover:bg-gray-100 cursor-pointer'>
                    <Image
                        className='absolute'
                        src={GoogleLogo}
                        height={25}
                        alt='Logotipo Google'
                    />
                    {googleTitleBttn}
                </button>
            </div>

        </div>
    );
}
