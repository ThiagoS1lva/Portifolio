import styles from '../../styles/Footer.module.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.nome}>
                    <p>Thiago Oliveira</p>
                    <span>© {currentYear} • Todos os direitos reservados</span>
                </div>
                <div className={styles.icones}>
                    <p>Conecte-se comigo</p>
                    <div className={styles.icon}>
                        <a href='https://www.linkedin.com/in/thiago-oliveira-49952823a/' target='_blank' rel='noreferrer' aria-label="LinkedIn">
                            <BsLinkedin size={24} />
                        </a>
                        <a href='https://github.com/ThiagoS1lva' target='_blank' rel='noreferrer' aria-label="GitHub">
                            <BsGithub size={24} />
                        </a>
                        <a href='https://www.instagram.com/diskthi/' target='_blank' rel='noreferrer' aria-label="Instagram">
                            <BsInstagram size={24} />
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!' target='_blank' rel='noreferrer' aria-label="WhatsApp">
                            <ImWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}