import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import { useTypingEffect } from "../../hooks/useTypingEffect"
import eu from '/eu.jpg'

const roles = ["Full Stack", "Front-end", "Back-end", "UI/UX", "React", "Python"]

export default function Home() {
    const { sectionHomeRef } = useContext(Context)
    const typedText = useTypingEffect(roles, 80, 50, 1800)

    return (
        <section ref={sectionHomeRef} className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-500 dark:text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full animate-bounce">
                        Disponível para novos projetos
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Olá, meu nome é <br />
                        <span className="text-gradient">Thiago Oliveira</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
                        Desenvolvedor <span className="text-indigo-500 dark:text-indigo-400">{typedText}</span>
                        <span className="inline-block w-[3px] h-[1em] bg-indigo-500 dark:bg-indigo-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]"></span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                        Graduando em Ciência da Computação pela UERJ. Transformo ideias em soluções digitais modernas,
                        focando em performance, acessibilidade e design premium.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center"
                        >
                            Entrar em contato
                        </a>
                        <button
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            className="px-8 py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-white/10 transition-all duration-300"
                        >
                            Ver projetos
                        </button>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative group">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-200 dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src={eu}
                                alt="Thiago Oliveira"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* Mini Badge Flutuante */}
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">Open to Work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
