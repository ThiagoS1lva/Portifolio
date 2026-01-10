import { useContext } from "react"
import { Context } from "../../contexts/Contexts"

import styles from '../styles/SectionSobre.module.css'

export default function SectionSobre() {
    const { sectionSobreRef } = useContext(Context)

    return (
        <div className={styles.container} ref={sectionSobreRef}>
            <div className={styles.container1}>
                <h1 className="animate-on-scroll">{`<Sobre mim />`}</h1>

                <p className="animate-on-scroll delay-1">
                    Sou técnico em Petróleo e Gás pelo IFF – Campus Cabo Frio e atualmente graduando em Ciência da Computação pela UERJ – Maracanã. Meu foco é me tornar um Desenvolvedor Web Full Stack completo.
                </p>

                <p className="animate-on-scroll delay-2">
                    Tenho grande interesse em desenvolvimento web, backend, análise de dados e automação de processos. Busco constantemente aprimorar minhas habilidades e criar soluções que façam a diferença.
                </p>

                <span className="animate-on-scroll delay-3">
                    {`"O importante não é como você começa, mas como termina."`}
                </span>

                <p className="animate-on-scroll delay-4">
                    Sou um desenvolvedor que preza pela clareza, modernidade e qualidade no código. Meu objetivo é entregar aplicações de alto padrão, com código limpo e de fácil manutenção.
                </p>
            </div>
        </div>
    )
}