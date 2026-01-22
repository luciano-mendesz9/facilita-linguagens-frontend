import Link from 'next/link'
import { PLATFORM_NAME } from '../constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  from-blue-50 to-blue-100 px-6">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-10">
        {/* Logo / Nome */}
        <h1 className="text-2xl font-bold text-blue-500 mb-2">
          {PLATFORM_NAME}
        </h1>

        {/* 404 */}
        <h2 className="text-7xl font-extrabold text-blue-400 mb-4">
          404
        </h2>

        {/* Mensagem */}
        <p className="text-gray-600 text-base mb-6">
          Opa! A página que você tentou acessar não existe!
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-blue-100 mb-6" />

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-400 px-6 py-3 text-white font-medium transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Voltar para o início
        </Link>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} {PLATFORM_NAME}
        </p>
      </div>
    </div>
  )
}
