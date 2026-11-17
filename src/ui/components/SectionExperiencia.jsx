import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'
import { experiencias } from '../../data/experiencias'

export default function SectionExperiencia() {
    const { sectionCarreiraRef } = useContext(Context)

    return (
        <section ref={sectionCarreiraRef} className="py-24 px-6 bg-white dark:bg-slate-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {`<Experiência />`}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Minha trajetória profissional, unindo engenharia de dados e desenvolvimento de software.
                    </p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                    {experiencias.map((exp, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <HiOutlineBriefcase size={20} />
                            </div>

                            {/* Card Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] card p-6 md:p-8">
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {exp.cargo}
                                    </h3>
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                                        {exp.empresa}{exp.tipo && ` · ${exp.tipo}`}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <HiOutlineCalendar size={16} />
                                        {exp.periodo}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <HiOutlineLocationMarker size={16} />
                                        {exp.local} · {exp.modalidade}
                                    </span>
                                </div>

                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    {exp.descricao}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.competencias.map((comp, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300"
                                        >
                                            {comp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
