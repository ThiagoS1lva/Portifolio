import { useContext, useState, useEffect } from "react"
import { Context } from "../../../contexts/Contexts"

import styles from '../../styles/Navbar.module.css'


export default function Navbar() {
    const { buttonHome, buttonSobre, buttonProjeto, buttonCarreira, buttonContato } = useContext(Context)
    const { sectionHomeRef, sectionSobreRef, sectionProjetoRef, sectionCarreiraRef, sectionContatoRef } = useContext(Context)
    const [isTransparent, setTransparent] = useState(true);

    //Transparência do header
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    function handleScroll() {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 5) {
            setTransparent(false);
        } else {
            setTransparent(true);
        }
    }


    return (
        <nav className={isTransparent ? `${styles.nav}` : `${styles.nav1}`}>
            <div className={styles.container}>
                <div>
                    <p className={isTransparent ? `${styles.link}` : `${styles.link1}` }>Thiago Oliveira</p>
                </div>
                <ul className={styles.menu}>
                    <li className={isTransparent ? `${styles.link}` : `${styles.link1}` } onClick={() => buttonHome(sectionHomeRef)}>{`<Página inicial/>`}</li>
                    <li className={isTransparent ? `${styles.link}` : `${styles.link1}` } onClick={() => buttonSobre(sectionSobreRef)}>{`<Sobre mim/>`}</li>
                    <li className={isTransparent ? `${styles.link}` : `${styles.link1}` } onClick={() => buttonProjeto(sectionProjetoRef)}>{`<Projetos/>`}</li>
                    <li className={isTransparent ? `${styles.link}` : `${styles.link1}` } onClick={() => buttonCarreira(sectionCarreiraRef)}>{`<Carreira Acadêmica/>`}</li>
                    <li className={isTransparent ? `${styles.link}` : `${styles.link1}` } onClick={() => buttonContato(sectionContatoRef)}>{`<Contato/>`}</li>
                </ul>
            </div>
        </nav>
    )
}