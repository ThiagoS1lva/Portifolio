import styles from '../styles/SectionAcademy.module.css'
import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'

export default function SectionAcademy() {
    const { sectionCarreiraRef } = useContext(Context)

    return (

        <div ref={sectionCarreiraRef} className={styles.dad}>
            <div className={styles.container}>
                <h1>{`<Carreira Acadêmica />`}</h1>
                <div className={styles.text}>
                    <p><span>Ciência da Computação</span> @ UERJ | 2022 - 20xx</p>
                    <p><span>Programadores Cariocas</span> @ Senac / Resilia | 2022 - 2023</p>
                </div>
            </div>
        </div>
    )
}