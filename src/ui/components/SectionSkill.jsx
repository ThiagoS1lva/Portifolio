import { FaPalette, FaServer, FaTools } from 'react-icons/fa'
import { skills } from '../../data/skills'

const icons = {
    "Front-end": <FaPalette size={18} />,
    "Back-end": <FaServer size={18} />,
    "Ferramentas": <FaTools size={18} />,
}

export default function SectionSkill() {

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {`<Skills />`}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Tecnologias e ferramentas que domino para criar soluções completas e escaláveis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="card p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-slate-400 dark:text-slate-500">
                                    {icons[category.title]}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 text-xs font-medium bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
