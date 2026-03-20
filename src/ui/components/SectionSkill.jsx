import { FaPalette, FaServer, FaTools } from 'react-icons/fa'
import { skills } from '../../data/skills'

const icons = {
    "Front-end": <FaPalette size={24} />,
    "Back-end": <FaServer size={24} />,
    "Ferramentas": <FaTools size={24} />,
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
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            {/* Brilho no topo do card */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50`}></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg`}>
                                    {icons[category.title]}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 text-xs font-medium bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/30 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-all duration-300"
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
