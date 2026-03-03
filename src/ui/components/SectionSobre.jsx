import { useContext } from "react"
import { Context } from "../../contexts/Contexts"

export default function SectionSobre() {
    const { sectionSobreRef } = useContext(Context)

    return (
        <section ref={sectionSobreRef} className="py-24 px-6 bg-slate-950/50 relative overflow-hidden">
            {/* Elemento decorativo de fundo */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                        {`<Sobre mim />`}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="glass-card p-8 md:p-12 space-y-8">
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        Sou técnico em <span className="text-white font-medium">Petróleo e Gás</span> pelo IFF e atualmente graduando em <span className="text-white font-medium">Ciência da Computação</span> pela UERJ. Minha jornada na tecnologia é movida pela curiosidade de entender como sistemas complexos funcionam e pela paixão de construir experiências web excepcionais.
                    </p>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        Com foco em <span className="text-indigo-400 font-medium">Full Stack Development</span>, busco sempre a intersecção ideal entre performance de backend e uma UI/UX impecável. Acredito que o código não deve apenas funcionar, mas deve ser sustentável e focado na jornada do usuário.
                    </p>

                    <div className="py-6 border-y border-white/5 flex flex-col items-center">
                        <span className="text-2xl md:text-3xl font-serif italic text-emerald-400 text-center">
                            {`"O importante não é como você começa, mas como termina."`}
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        Clareza, modernidade e qualidade são os pilares que guiam meu fluxo de trabalho. Meu objetivo final é entregar aplicações de <span className="text-sky-400 font-medium">alto padrão</span>, que resolvam problemas reais com elegância e eficiência.
                    </p>
                </div>
            </div>
        </section>
    )
}