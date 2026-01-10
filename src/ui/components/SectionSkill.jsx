import styles from '../styles/SectionSkill.module.css'
import { FaPalette, FaServer, FaTools } from 'react-icons/fa'

export default function SectionSkill() {
    const skills = [
        {
            title: "Front-end",
            icon: <FaPalette size={22} />,
            items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js"]
        },
        {
            title: "Back-end",
            icon: <FaServer size={22} />,
            items: ["Python", "C", "C# (.NET)"]
        },
        {
            title: "Outros",
            icon: <FaTools size={22} />,
            items: ["Lógica de Programação", "APIs REST", "Git & GitHub"]
        }
    ]

    return (
        <div className={styles.dad}>
            <div className={styles.container}>
                <h1 className="animate-on-scroll">{`<Skills />`}</h1>
                <p className={`${styles.subtitle} animate-on-scroll delay-1`}>
                    Tecnologias e ferramentas que utilizo no dia a dia
                </p>

                <div className={styles.skillsGrid}>
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className={`${styles.skillCategory} animate-on-scroll delay-${index + 2}`}
                        >
                            <div className={styles.categoryTitle}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {category.items.map((skill, skillIndex) => (
                                    <span key={skillIndex} className={styles.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}