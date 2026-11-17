import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'
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
                            className="card p-8"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm mb-4">{item.institution}</p>

                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                {item.period}
                            </p>

                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                {item.highlight}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
