import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import styles from '../styles/SectionSobre.module.css'

export default function SectionSobre() {
    const { sectionSobreRef } = useContext(Context)

    return (
        <div className={styles.container} ref={sectionSobreRef}>
            <div className={styles.container1}>
                <h1>{`<Sobre mim />`}</h1>
                <p>
                    Eu sou um graduando em Ciência da Computação na UERJ - Maracanã e estou me dedicando aos estudos para me tornar um programador web full stack.
                </p>

                <p>
                    Estou aprimorando minhas habilidades em HTML5, CSS3, JavaScript, React.JS, Python e C. Estou animado para colocar em prática todo o conhecimento adquirido e contribuir para projetos desafiadores no mundo da programação.
                </p>
                <span>
                    {`"O importante não é como você começa, mas como termina."`}
                </span>
                <p>
                    Sou um programador que preza pela clareza e modernidade no código que desenvolvo.  busco sempre criar aplicações de alta qualidade, que sejam simples e de fácil manutenção, entregando soluções de alto padrão aos meus clientes e usuários.
                </p>
            </div>
        </div>
    )

}