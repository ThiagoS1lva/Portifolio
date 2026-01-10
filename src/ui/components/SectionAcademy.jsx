import styles from '../styles/SectionAcademy.module.css'
import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'

export default function SectionAcademy() {
    const { sectionCarreiraRef } = useContext(Context)

    const timeline = [
        {
            title: "Ciência da Computação",
            institution: "UERJ – Maracanã",
            period: "2022 - Presente"
        },
        {
            title: "Técnico em Petróleo e Gás",
            institution: "IFF – Campus Cabo Frio",
            period: "Concluído"
        },
        {
            title: "Programadores Cariocas",
            institution: "Senac / Resilia",
            period: "2022 - 2023"
        }
    ]

    return (
        <div ref={sectionCarreiraRef} className={styles.dad}>
            <div className={styles.container}>
                <h1 className="animate-on-scroll">{`<Carreira Acadêmica />`}</h1>

                <div className={styles.timeline}>
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.timelineItem} animate-on-scroll delay-${index + 1}`}
                        >
                            <h3>{item.title}</h3>
                            <p className={styles.institution}>{item.institution}</p>
                            <p className={styles.period}>{item.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}