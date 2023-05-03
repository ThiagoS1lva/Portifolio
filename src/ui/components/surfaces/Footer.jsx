import styles from '../../styles/Footer.module.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'

export default function Footer () {

    return (
        <div className={styles.container}>
            <div className={styles.nome}>
                <p>Thiago Oliveira</p>
            </div>
            <div className={styles.icones}>
                <p>Contato:</p>
                <hr style={{marginTop:'3%'}}/>
                <div className={styles.icon}>
                    <a href='https://www.linkedin.com/in/thiago-oliveira-49952823a/' target='_blank' rel='noreferrer'><BsLinkedin size={30}/></a>
                    <a href='https://github.com/ThiagoS1lva' target='_blank' rel='noreferrer'><BsGithub size={30}/></a>
                    <a href='https://www.instagram.com/diskthi/' target='_blank' rel='noreferrer'><BsInstagram size={30}/></a>
                    <a href='https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!' target='_blank' rel='noreferrer'><ImWhatsapp size={30}/></a>
                </div>
            </div>
        </div>
    )
}