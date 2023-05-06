import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import styles from '../styles/SectionContato.module.css'

export default function SectionContato() {
    const { sectionContatoRef } = useContext(Context)

    return (
        <div className={styles.dad} ref={sectionContatoRef}>
            <div className={styles.container}>
                <h1>{`<Contato />`}</h1>
                <p>Minha inbox sempre estará disponível. Caso você tenha uma dúvida, um projeto ou apenas quer dizer oi, eu vou dar o melhor para responde-lo.</p>
                <a href="https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!" target="blank"><button>Diga olá!</button></a>
            </div>
        </div>
    )
}