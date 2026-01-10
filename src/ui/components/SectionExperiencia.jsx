import styles from '../styles/SectionExperiencia.module.css'
import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'

export default function SectionExperiencia() {
    const experiencias = [
        {
            cargo: "Estagiário de Inteligência de Mercado",
            empresa: "WEB Nordeste LTDA",
            periodo: "Set 2025 - Presente",
            local: "Rio de Janeiro, RJ",
            modalidade: "Híbrido",
            descricao: "Desenvolvimento de ferramentas e análise de dados para inteligência de mercado.",
            competencias: ["Análise de Dados", "Desenvolvimento Web", "Python"]
        },
        {
            cargo: "Assistente de Análise de Dados",
            empresa: "ANP - Agência Nacional do Petróleo",
            periodo: "Dez 2024 - Set 2025",
            local: "Rio de Janeiro, RJ",
            modalidade: "Presencial",
            descricao: "Transformação de dados brutos em insights estratégicos. Desenvolvimento de dashboards no Power BI, automação com Power Automate e criação de apps low-code.",
            competencias: ["Power BI", "Power Apps", "Python", "SQL", "ETL"]
        },
        {
            cargo: "Estagiário de TI",
            empresa: "Fundação Universitária José Bonifácio",
            periodo: "Set 2024 - Nov 2024",
            local: "Rio de Janeiro, RJ",
            modalidade: "Presencial",
            descricao: "Desenvolvimento de aplicações web utilizando Vue.js e .NET Framework com banco de dados SQL Server.",
            competencias: ["Vue.js", ".NET", "SQL Server", "JavaScript"]
        },
        {
            cargo: "Estagiário de TI",
            empresa: "ANP - Agência Nacional do Petróleo",
            periodo: "Nov 2023 - Ago 2024",
            local: "Rio de Janeiro, RJ",
            modalidade: "Remoto",
            descricao: "Desenvolvimento de dashboards interativos, automação de processos e criação de aplicativos personalizados utilizando as Power Platforms da Microsoft.",
            competencias: ["Power BI", "Power Automate", "Power Apps", "Python"]
        },
        {
            cargo: "Estagiário de TI - Machine Learning",
            empresa: "UERJ - Universidade do Estado do Rio de Janeiro",
            periodo: "Out 2022 - Out 2023",
            local: "Rio de Janeiro, RJ",
            modalidade: "Híbrido",
            descricao: "Pesquisa e implementação de modelos de Machine Learning com Scikit-learn, incluindo SVM para classificação e regressão com técnicas de validação cruzada.",
            competencias: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"]
        }
    ]

    return (
        <div className={styles.dad}>
            <div className={styles.container}>
                <h1 className="animate-on-scroll">{`<Experiência />`}</h1>

                <div className={styles.timeline}>
                    {experiencias.map((exp, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-on-scroll delay-${Math.min(index + 1, 5)}`}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <HiOutlineBriefcase size={24} />
                                </div>
                                <div className={styles.headerInfo}>
                                    <h3>{exp.cargo}</h3>
                                    <p className={styles.empresa}>{exp.empresa}</p>
                                </div>
                            </div>

                            <div className={styles.meta}>
                                <span>
                                    <HiOutlineCalendar size={16} />
                                    {exp.periodo}
                                </span>
                                <span>
                                    <HiOutlineLocationMarker size={16} />
                                    {exp.local} · {exp.modalidade}
                                </span>
                            </div>

                            <p className={styles.descricao}>{exp.descricao}</p>

                            <div className={styles.tags}>
                                {exp.competencias.map((comp, i) => (
                                    <span key={i}>{comp}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
