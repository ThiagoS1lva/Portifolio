import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-white mb-2">Thiago Oliveira</p>
                    <p className="text-slate-500 text-sm">
                        © {currentYear} • Desenvolvido com foco em excelência digital.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <p className="text-slate-300 font-medium text-sm uppercase tracking-widest">Conecte-se comigo</p>
                    <div className="flex gap-6">
                        <a
                            href='https://www.linkedin.com/in/thiago-oliveira-49952823a/'
                            target='_blank'
                            rel='noreferrer'
                            className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <BsLinkedin size={24} />
                        </a>
                        <a
                            href='https://github.com/ThiagoS1lva'
                            target='_blank'
                            rel='noreferrer'
                            className="text-slate-400 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <BsGithub size={24} />
                        </a>
                        <a
                            href='https://www.instagram.com/diskthi/'
                            target='_blank'
                            rel='noreferrer'
                            className="text-slate-400 hover:text-pink-400 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <BsInstagram size={24} />
                        </a>
                        <a
                            href='https://api.whatsapp.com/send?phone=5522991055011&text=Ol%C3%A1,%20Thiago!%20Vim%20pelo%20seu%20site!'
                            target='_blank'
                            rel='noreferrer'
                            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                            aria-label="WhatsApp"
                        >
                            <ImWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Brilhos decorativos */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full"></div>
        </footer>
    )
}