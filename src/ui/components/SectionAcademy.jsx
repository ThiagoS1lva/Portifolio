import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { formacoes } from '../../data/academy'

export default function SectionAcademy() {
    const { sectionAcademyRef } = useContext(Context)

    return (
        <section ref={sectionAcademyRef} className="py-24 px-6 bg-white dark:bg-slate-950/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {`<Carreira Acadêmica />`}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Fundamentos sólidos que sustentam meu desenvolvimento profissional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {formacoes.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 group hover:border-emerald-500/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                <HiOutlineAcademicCap size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-4">{item.institution}</p>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-xs font-semibold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                                    {item.period}
                                </span>
                            </div>

                            <p className="text-slate-500 text-sm italic border-l-2 border-emerald-500/30 pl-4">
                                {item.highlight}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
