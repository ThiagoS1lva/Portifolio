import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/20 transition-all duration-500 hover:bg-indigo-500 hover:-translate-y-1 active:scale-95 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <HiArrowUp size={24} />
            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </button>
    )
}
