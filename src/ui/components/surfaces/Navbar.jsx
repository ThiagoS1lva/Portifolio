import { useContext, useState, useEffect } from "react"
import { Context } from "../../../contexts/Contexts"
import { HiMenuAlt3, HiX } from "react-icons/hi"

export default function Navbar() {
    const { buttonHome, buttonSobre, buttonProjeto, buttonCarreira, buttonContato } = useContext(Context)
    const { sectionHomeRef, sectionSobreRef, sectionProjetoRef, sectionCarreiraRef, sectionContatoRef } = useContext(Context)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    function handleNavClick(action, ref) {
        action(ref)
        setMenuOpen(false)
    }

    const navLinks = [
        { name: 'Início', ref: sectionHomeRef, action: buttonHome },
        { name: 'Sobre', ref: sectionSobreRef, action: buttonSobre },
        { name: 'Projetos', ref: sectionProjetoRef, action: buttonProjeto },
        { name: 'Carreira', ref: sectionCarreiraRef, action: buttonCarreira },
        { name: 'Contato', ref: sectionContatoRef, action: buttonContato },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <p
                            className="relative text-xl font-bold text-white cursor-pointer"
                            onClick={() => handleNavClick(buttonHome, sectionHomeRef)}
                        >
                            Thiago Oliveira
                        </p>
                    </div>

                    {/* Desktop Menu */}
                    <ul className={`hidden md:flex items-center gap-8 py-2 px-6 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg' : ''
                        }`}>
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors relative group"
                                onClick={() => link.action(link.ref)}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setMenuOpen(true)}
                    >
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-xl transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <button
                    className="absolute top-6 right-6 p-2 text-slate-300 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <HiX size={32} />
                </button>

                <ul className="h-full flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className="text-2xl font-bold text-white cursor-pointer hover:text-indigo-400 transition-colors"
                            onClick={() => handleNavClick(link.action, link.ref)}
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}