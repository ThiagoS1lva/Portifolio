import { useContext, useState, useRef } from "react"
import { Context } from "../../contexts/Contexts"
import emailjs from '@emailjs/browser'
import styles from '../styles/SectionContato.module.css'
import { HiOutlineMail, HiOutlineUser, HiOutlineChatAlt2 } from 'react-icons/hi'

export default function SectionContato() {
    const { sectionContatoRef } = useContext(Context)
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            await emailjs.sendForm(
                'service_portfolio',
                'template_contact',
                formRef.current,
                'YOUR_PUBLIC_KEY'
            )
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            setStatus('error')
        }
        setLoading(false)
    }

    return (
        <div className={styles.dad} ref={sectionContatoRef}>
            <div className={styles.container}>
                <h1 className="animate-on-scroll">{`<Contato />`}</h1>
                <p className="animate-on-scroll delay-1">
                    Estou disponível para novos projetos e oportunidades.
                    Preencha o formulário ou entre em contato pelo WhatsApp!
                </p>

                <div className={styles.content}>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className={`${styles.form} animate-on-scroll delay-2`}
                    >
                        <div className={styles.inputGroup}>
                            <HiOutlineUser size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <HiOutlineMail size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu e-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <HiOutlineChatAlt2 size={20} />
                            <textarea
                                name="message"
                                placeholder="Sua mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            />
                        </div>

                        <input type="hidden" name="to_email" value="thiagooliveira745@gmail.com" />

                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.submitBtn}
                        >
                            {loading ? 'Enviando...' : 'Enviar mensagem'}
                        </button>

                        {status === 'success' && (
                            <p className={styles.success}>Mensagem enviada com sucesso!</p>
                        )}
                        {status === 'error' && (
                            <p className={styles.error}>Erro ao enviar. Tente novamente.</p>
                        )}
                    </form>

                    <div className={`${styles.altContact} animate-on-scroll delay-3`}>
                        <p>Ou se preferir:</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className={styles.whatsappBtn}>
                                Conversar no WhatsApp
                            </button>
                        </a>
                        <a href="mailto:thiagooliveira745@gmail.com" className={styles.emailLink}>
                            thiagooliveira745@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}