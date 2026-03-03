import { FaPalette, FaServer, FaTools } from 'react-icons/fa'

export default function SectionSkill() {
    const skills = [
        {
            title: "Front-end",
            icon: <FaPalette size={24} />,
            color: "from-pink-500 to-rose-500",
            items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Tailwind CSS"]
        },
        {
            title: "Back-end",
            icon: <FaServer size={24} />,
            color: "from-indigo-500 to-blue-500",
            items: ["Python", "C# (.NET)", "Node.js", "SQL Server", "Supabase"]
        },
        {
            title: "Ferramentas",
            icon: <FaTools size={24} />,
            color: "from-emerald-500 to-teal-500",
            items: ["Git & GitHub", "APIs REST", "Figma", "Docker", "Vercel"]
        }
    ]

    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {`<Skills />`}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
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