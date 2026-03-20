import { useContext, useState, useRef } from "react"
import { Context } from "../../contexts/Contexts"
import emailjs from '@emailjs/browser'
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
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            setStatus('error')
        }
        setLoading(false)
    }

    return (
        <section ref={sectionContatoRef} className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                        {`<Contato />`}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
                        Vamos construir algo incrível juntos? Se você tem uma ideia, um projeto ou apenas quer dar um oi,
                        preencha o formulário ou entre em contato pelos canais diretos.
                    </p>

                    <div className="space-y-6">
                        <div className="glass-card p-6 flex items-center gap-6 group hover:border-emerald-500/30 transition-all">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                                <HiOutlineMail size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">E-mail</p>
                                <a href="mailto:thiagooliveira745@gmail.com" className="text-lg text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                                    thiagooliveira745@gmail.com
                                </a>
                            </div>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!"
                            target="_blank"
                            rel="noreferrer"
                            className="glass-card p-6 flex items-center gap-6 group hover:border-indigo-500/30 transition-all"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                                <HiOutlineChatAlt2 size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">WhatsApp</p>
                                <p className="text-lg text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    +55 22 99105-5011
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="glass-card p-8 md:p-10 space-y-6 relative"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                <HiOutlineUser size={16} /> Seu Nome
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Como devo te chamar?"
                                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                <HiOutlineMail size={16} /> Seu E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemplo@email.com"
                                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                <HiOutlineChatAlt2 size={16} /> Sua Mensagem
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Conte mais sobre o projeto..."
                                rows={5}
                                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                                required
                            />
                        </div>

                        <input type="hidden" name="to_email" value="thiagooliveira745@gmail.com" />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando...
                                </span>
                            ) : 'Enviar mensagem'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 dark:text-emerald-400 text-center font-medium animate-in fade-in zoom-in duration-300">
                                Mensagem enviada com sucesso!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 dark:text-rose-400 text-center font-medium animate-in fade-in zoom-in duration-300">
                                Erro ao enviar. Tente novamente ou use o WhatsApp.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
