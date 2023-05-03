import { useContext } from "react"
import { Context } from "../../contexts/Contexts"

import styles from '../styles/HomeStart.module.css'
import { BsFillStarFill } from 'react-icons/bs'

import eu from '/eu.jpg'

export default function Home() {
    const { sectionHomeRef } = useContext(Context)

    return (

        <div ref={sectionHomeRef} className={styles.container}>
            <div className={styles.esquerda}>
                <div className={styles.estrela}>
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                </div>
                <div className={styles.linha}>
                    &nbsp;
                </div>
            </div>

            <div className={styles.centro}>
                <div className={styles.centroCima}>
                    <div className={styles.titulo}>
                        <p>Olá, Meu nome é <span>Thiago Oliveira</span></p>
                        <p>Sou um <span>desenvolvedor web full stack</span></p>
                    </div>
                    <div className={styles.centroImg}>
                        <div className={styles.border}></div>
                        <img src={eu} alt="Eu" width='300px' />
                    </div>
                </div>
                <div className={styles.centroBaixo}>
                    <p>Eu sou um desenvolvedor web full stack com experiência em React.js, além de habilidades em programação em Python e C. Atualmente, estou disponível para projetos como freelancer.</p>
                    <button>Contate-me</button>
                </div>
            </div>

            <div className={styles.direita}>
                <div className={styles.linhaD}>
                    &nbsp;
                </div>
                <div className={styles.estrelaD}>
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                </div>
            </div>

        </div>

    )
}