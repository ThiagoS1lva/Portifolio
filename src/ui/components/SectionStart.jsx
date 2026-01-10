import { useContext } from "react"
import { Context } from "../../contexts/Contexts"

import styles from '../styles/SectionStart.module.css'

import eu from '/eu.jpg'

export default function Home() {
    const { sectionHomeRef } = useContext(Context)

    return (
        <div ref={sectionHomeRef} className={styles.container}>
            <div className={styles.centro}>
                <div className={styles.centroCima}>
                    <div className={styles.titulo}>
                        <p>Olá, meu nome é</p>
                        <p><span>Thiago Oliveira</span></p>
                        <p>Sou <span>Desenvolvedor Full Stack</span></p>
                    </div>
                    <div className={styles.centroImg}>
                        <img
                            src={eu}
                            alt="Foto de Thiago Oliveira - Desenvolvedor Full Stack"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </div>
                </div>
                <div className={styles.centroBaixo}>
                    <p>Graduando em <span>Ciência da Computação</span> pela UERJ, com foco em desenvolvimento web, backend e automação. Transformo ideias em soluções digitais modernas e funcionais.</p>
                    <a href="https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!" target="_blank" rel="noreferrer">
                        <button>Entrar em contato</button>
                    </a>
                </div>
            </div>
        </div>
    )
}