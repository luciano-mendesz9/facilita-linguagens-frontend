import Link from 'next/link'
import {
  BookOpen,
  Star,
  Users,
  Clock,
  PlayCircle,
  Mail,
  Globe,
  Trophy,
  CheckCircle,
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="light overflow-x-hidden font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-400 p-2 rounded-lg shadow-sm">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Facilita Linguagens
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <a href="#home" className="hover:text-blue-500 transition-colors">Início</a>
              <a href="#recursos" className="hover:text-blue-500 transition-colors">Recursos</a>
              <a href="#precos" className="hover:text-blue-500 transition-colors">Planos</a>
              <a href="#contato" className="hover:text-blue-500 transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">Entrar</Link>
              <Link href="/login?register=true" className="bg-blue-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 shadow-md transition">Começar</Link>
            </div>

            <button className="md:hidden p-2 rounded-lg text-slate-700">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-24">
        {/* HERO */}
        <section id="home" className="relative pt-16 md:pt-28 pb-20 bg-linear-to-br from-blue-50 to-white hero-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              {/* Texto */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6 uppercase">
                  <Star size={14} /> Aumente suas chances
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  Leia melhor, entenda mais — <span className="text-blue-400">garanta sua aprovação</span>
                </h1>

                <p className="text-slate-600 text-lg md:text-xl mb-8">
                  Plataforma de leitura guiada, com trilhas de estudo, resumos inteligentes e suporte por IA — pensada para quem quer passar nos vestibulares.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link href="/signup" className="inline-flex items-center gap-3 btn-primary px-6 py-3 rounded-full bg-blue-400 text-white font-semibold hover:bg-blue-500 shadow-lg">
                    Começar Gratuitamente
                    <PlayCircle size={18} />
                  </Link>
                  <a href="#recursos" className="inline-flex items-center gap-2 text-slate-700 px-5 py-3 rounded-lg hover:text-blue-500 transition">
                    <PlayCircle size={18} /> Ver como funciona
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-blue-400" size={18} />
                    <span><strong>+15k</strong> estudantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-400" size={18} />
                    <span><strong>300+</strong> obras mapeadas</span>
                  </div>
                </div>
              </div>

              {/* Card lateral com destaque */}
              <aside className="w-full max-w-md">
                <div className="card-premium p-6 rounded-2xl border border-slate-100 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-md"><Users className="text-blue-500" size={18} /></div>
                      <div>
                        <p className="font-bold text-slate-800">Alunos em destaque</p>
                        <p className="text-xs text-text-muted">Esta semana</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">Ranking</span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60">
                      <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-blue-600">01</div>
                      <div className="flex-1">
                        <p className="font-medium">Ana Luísa</p>
                        <p className="text-xs text-slate-500">32 capítulos concluídos</p>
                      </div>
                      <div className="text-sm font-semibold text-blue-500">15.4k XP</div>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-xl">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-400">02</div>
                      <div className="flex-1">
                        <p className="font-medium">Marcos V.</p>
                        <p className="text-xs text-slate-500">28 capítulos</p>
                      </div>
                      <div className="text-sm text-slate-500">13.2k XP</div>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-400">03</div>
                      <div className="flex-1">
                        <p className="font-medium">Gabriel S.</p>
                        <p className="text-xs text-slate-500">25 capítulos</p>
                      </div>
                      <div className="text-sm text-slate-500">11.8k XP</div>
                    </li>
                  </ul>

                  <div className="mt-4 text-center text-xs text-slate-500">Junte-se a outros 15.000 estudantes hoje.</div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">O que o Facilita oferece</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10">Ferramentas pensadas para acelerar seu aprendizado e transformar sua leitura em resultado.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-400" size={22} />
                  <h3 className="font-bold">Mapeamento de Obras</h3>
                </div>
                <p className="text-sm text-slate-600">Obras organizadas por tema, nível e tópicos frequentemente cobrados em vestibulares.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-blue-400" size={22} />
                  <h3 className="font-bold">Trilhas Gamificadas</h3>
                </div>
                <p className="text-sm text-slate-600">Progresso por fases, recompensas e ranking para manter sua rotina consistente.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-blue-400" size={22} />
                  <h3 className="font-bold">Suporte 24/7</h3>
                </div>
                <p className="text-sm text-slate-600">IA e especialistas prontos para tirar dúvidas e comentar trechos importantes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS / PROOF */}
        <section className="py-12 bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-blue-400">300+</p>
              <p className="text-sm text-slate-600">Obras Mapeadas</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-400">15k</p>
              <p className="text-sm text-slate-600">Usuários Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-400">98%</p>
              <p className="text-sm text-slate-600">Aprovação em Lit.</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-400">24/7</p>
              <p className="text-sm text-slate-600">Suporte por IA</p>
            </div>
          </div>
        </section>

        {/* PREÇOS */}
        <section id="precos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">Planos que se adaptam a você</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Escolha entre plano gratuito, mensal ou institucional — sem surpresas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Gratis */}
              <div className="card-premium p-6 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Básico</span>
                <h3 className="mt-4 font-bold text-lg">Explorador</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold">Grátis</span>
                </div>
                <p className="text-sm text-slate-600 mt-3">Acesso inicial com obras públicas e trilhas básicas.</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={16}/> Acesso ao nível 1–5</li>
                  <li className="flex items-center gap-2 text-slate-400"><span className="ml-0.5 material-symbols-outlined">lock</span> Ranking limitado</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={16}/> Conteúdo público</li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup" className="w-full inline-block text-center py-3 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50">Começar Agora</Link>
                </div>
              </div>

              {/* Premium */}
              <div className="card-premium p-6 rounded-2xl border-2 border-blue-400 relative shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-[10px] font-bold px-4 py-1.5 rounded-full">MAIS RECOMENDADO</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Premium</span>
                <h3 className="mt-4 font-bold text-lg">Amante da Literatura</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-slate-600">R$</span>
                  <span className="text-3xl font-extrabold">29,90</span>
                  <span className="text-sm text-slate-600">/mês</span>
                </div>
                <p className="text-sm text-slate-600 mt-3">Acesso total com IA, comentários e ranking completo.</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Trophy className="text-blue-400" size={16}/> IA 24/7 para dúvidas</li>
                  <li className="flex items-center gap-2"><Star className="text-blue-400" size={16}/> Comentários de especialistas</li>
                  <li className="flex items-center gap-2"><Users className="text-blue-400" size={16}/> Ranking global</li>
                </ul>
                <div className="mt-6">
                  <Link href="/subscribe" className="w-full inline-block text-center py-3 rounded-xl bg-blue-400 text-white font-bold hover:bg-blue-500 shadow-lg">Assinar Agora</Link>
                </div>
              </div>

              {/* Institucional */}
              <div className="card-premium p-6 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Escolar</span>
                <h3 className="mt-4 font-bold text-lg">Instituições</h3>
                <div className="mt-4">
                  <span className="text-2xl font-extrabold text-blue-400">Sob Consulta</span>
                </div>
                <p className="text-sm text-slate-600 mt-3">Plano para escolas, com gestão de turmas e integração LMS.</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Users className="text-blue-400" size={16}/> Gestão de turmas</li>
                  <li className="flex items-center gap-2"><Globe className="text-blue-400" size={16}/> Integração LMS</li>
                  <li className="flex items-center gap-2"><Clock className="text-blue-400" size={16}/> Monitoramento</li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="w-full inline-block text-center py-3 rounded-xl border border-slate-800 font-bold hover:bg-slate-800 hover:text-white transition">Falar com Consultor</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-linear-to-r from-blue-500 to-blue-400">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white/10 rounded-2xl p-10 text-white text-center relative overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Pronto para transformar sua leitura?</h2>
              <p className="max-w-2xl mx-auto text-blue-100 mb-6">Milhares de estudantes já aceleraram a nota em literatura com o Facilita.</p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/signup" className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:opacity-95">Criar conta gratuita</Link>
                <a href="#precos" className="text-white/90 font-medium underline">Ver planos</a>
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer id="contato" className="bg-slate-900 text-slate-400 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-400 p-2 rounded-md"><BookOpen className="text-white" size={18} /></div>
                  <span className="text-white font-bold">Facilita Linguagens</span>
                </div>
                <p className="text-sm text-slate-400">Gamificação educacional para vestibulandos — resumos, trilhas e suporte por IA.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Navegação</h4>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-white" href="#home">Início</a></li>
                  <li><a className="hover:text-white" href="#recursos">Recursos</a></li>
                  <li><a className="hover:text-white" href="#precos">Planos</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Suporte</h4>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-white" href="/help">Central de Ajuda</a></li>
                  <li><a className="hover:text-white" href="/privacy">Privacidade</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                <p className="text-sm text-slate-400 mb-3">Receba dicas de leitura e resumos semanais.</p>
                <form className="flex gap-2">
                  <input aria-label="email" type="email" placeholder="Seu melhor e-mail" className="flex-1 rounded-lg py-2 px-3 bg-slate-800 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 border-none" />
                  <button className="bg-blue-400 px-4 rounded-lg text-white font-semibold">Inscrever</button>
                </form>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs">
              <p>© {new Date().getFullYear()} Facilita Linguagens. Todos os direitos reservados.</p>
              <p className="flex items-center gap-2 text-slate-500"><Mail size={12} /> contato@facilita.com</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
