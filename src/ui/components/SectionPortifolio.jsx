import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import { BsGithub } from "react-icons/bs"
import { RiShareBoxLine } from "react-icons/ri"
import { projetos } from "../../data/projetos"

export default function SectionPortifolio() {
    const { sectionProjetoRef } = useContext(Context)

    return (
        <section ref={sectionProjetoRef} className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
                        {`<Projetos />`}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Uma seleção dos meus projetos mais recentes e complexos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projetos.map((projeto, index) => (
                        <div
                            key={index}
                            className="glass-card group overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={projeto.image}
                                    alt={projeto.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {projeto.github && (
                                        <a href={projeto.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                                            <BsGithub size={24} className="text-slate-900 dark:text-white" />
                                        </a>
                                    )}
                                    {projeto.live && (
                                        <a href={projeto.live} target="_blank" rel="noreferrer" className="p-3 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                                            <RiShareBoxLine size={24} className="text-slate-900 dark:text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {projeto.title}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                    {projeto.description}
                                </p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {projeto.techs.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 rounded"
                                        >
                                            {tech}
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
