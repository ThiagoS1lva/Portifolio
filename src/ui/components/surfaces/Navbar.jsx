import { useContext, useState, useEffect } from "react"
import { Context } from "../../../contexts/Contexts"
import { HiMenuAlt3, HiX } from "react-icons/hi"

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    const { buttonHome, buttonSobre, buttonProjeto, buttonCarreira, buttonContato } = useContext(Context)
    const { sectionHomeRef, sectionSobreRef, sectionProjetoRef, sectionCarreiraRef, sectionContatoRef } = useContext(Context)
    const [isTransparent, setTransparent] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])

    function handleScroll() {
        const scrollTop = window.pageYOffset
        setTransparent(scrollTop <= 5)
    }

    function handleNavClick(action, ref) {
        action(ref)
        setMenuOpen(false)
    }

    return (
        <>
            <nav className={isTransparent ? styles.nav : styles.nav1}>
                <div className={styles.container}>
                    <div>
                        <p className={styles.logo} onClick={() => handleNavClick(buttonHome, sectionHomeRef)}>
                            Thiago Oliveira
                        </p>
                    </div>
                    <ul className={styles.menu}>
                        <li className={styles.link} onClick={() => buttonHome(sectionHomeRef)}>Início</li>
                        <li className={styles.link} onClick={() => buttonSobre(sectionSobreRef)}>Sobre</li>
                        <li className={styles.link} onClick={() => buttonProjeto(sectionProjetoRef)}>Projetos</li>
                        <li className={styles.link} onClick={() => buttonCarreira(sectionCarreiraRef)}>Carreira</li>
                        <li className={styles.link} onClick={() => buttonContato(sectionContatoRef)}>Contato</li>
                    </ul>
                    <button className={styles.menuToggle} onClick={() => setMenuOpen(true)}>
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                    <HiX size={32} />
                </button>
                <ul className={styles.mobileNav}>
                    <li onClick={() => handleNavClick(buttonHome, sectionHomeRef)}>Início</li>
                    <li onClick={() => handleNavClick(buttonSobre, sectionSobreRef)}>Sobre</li>
                    <li onClick={() => handleNavClick(buttonProjeto, sectionProjetoRef)}>Projetos</li>
                    <li onClick={() => handleNavClick(buttonCarreira, sectionCarreiraRef)}>Carreira</li>
                    <li onClick={() => handleNavClick(buttonContato, sectionContatoRef)}>Contato</li>
                </ul>
            </div>

            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
        </>
    )
}