import styles from '../styles/SectionPortifolio.module.css'
import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import { BsGithub } from "react-icons/bs"
import { RiShareBoxLine } from "react-icons/ri"

export default function SectionPortifolio() {
    const { sectionProjetoRef } = useContext(Context)

    const projetos = [
        {
            title: "Kscalho",
            description: "App de finanças pessoais com assistente de IA (Kscalinho). Gerenciamento de receitas, despesas e metas com gráficos interativos e planos premium via Stripe.",
            image: "/Kascalho.png",
            github: "",
            live: "https://kascalho.vercel.app",
            techs: ["Vue 3", "Supabase", "Gemini AI", "Stripe", "PWA"]
        },
        {
            title: "Tarotly",
            description: "Monorepo com app de leitura de tarot com IA e blog SEO-friendly. Interpretações geradas por IA, pagamentos, notificações push e internacionalização.",
            image: "/tarotly.png",
            github: "",
            live: "http://tarotly.site/",
            techs: ["Vue 3", "Astro", "Groq AI", "Stripe", "PWA"]
        },
        {
            title: "Pont Uau",
            description: "Sistema de agendamentos mobile-first com confirmações por e-mail, integração Google Maps e dashboard com métricas via gráficos interativos.",
            image: "/Pontuau.png",
            github: "",
            live: "https://pont-uau.vercel.app/",
            techs: ["Nuxt 3", "Supabase", "Tailwind", "Chart.js"]
        },
        {
            title: "Pokédex",
            description: "Uma Pokédex interativa desenvolvida com Next.js que consome a PokeAPI para exibir informações detalhadas de Pokémon.",
            image: "/pokedex.jpeg",
            github: "https://github.com/ThiagoS1lva/pokedex",
            live: "https://pokedex-pi-sable.vercel.app/",
            techs: ["JavaScript", "Next.js", "PokeAPI"]
        },
        {
            title: "Recicla.ai",
            description: "MVP completo com sistema de cadastro e autenticação de usuários e empresas, conectando ao banco de dados.",
            image: "/recicla.jpeg",
            github: "",
            live: null,
            techs: ["React.js", "Express", "Node.js", "SQLite"]
        },
        {
            title: "WordCloud Twitter",
            description: "Análise de dados do Twitter utilizando Python para gerar nuvens de palavras a partir de trends e hashtags.",
            image: "/Cloud.png",
            github: "https://github.com/ThiagoS1lva/wordCloud-TwitterAPI/tree/main",
            live: null,
            techs: ["Python", "Tweepy", "Pandas", "WordCloud"]
        }
    ]

    return (
        <div ref={sectionProjetoRef} className={styles.dad}>
            <div className={styles.container}>
                <h1 className="animate-on-scroll">{`<Projetos />`}</h1>
                <p className="animate-on-scroll delay-1">Uma seleção dos meus projetos mais recentes</p>

                <div className={styles.projetos}>
                    {projetos.map((projeto, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-on-scroll delay-${Math.min(index + 2, 5)}`}
                        >
                            <div className={styles.cardImage}>
                                <img
                                    src={projeto.image}
                                    alt={`Screenshot do projeto ${projeto.title}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h2>{projeto.title}</h2>
                                    <div className={styles.cardIcons}>
                                        {projeto.github && (
                                            <a href={projeto.github} target="_blank" rel="noreferrer" aria-label={`GitHub do projeto ${projeto.title}`}>
                                                <BsGithub size={20} />
                                            </a>
                                        )}
                                        {projeto.live && (
                                            <a href={projeto.live} target="_blank" rel="noreferrer" aria-label={`Ver projeto ${projeto.title} ao vivo`}>
                                                <RiShareBoxLine size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p>{projeto.description}</p>
                                <div className={styles.language}>
                                    {projeto.techs.map((tech, techIndex) => (
                                        <p key={techIndex}>{tech}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}