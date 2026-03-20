import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

export default function ThemeToggle() {
    const { dark, toggleTheme } = useContext(ThemeContext)
    const [animating, setAnimating] = useState(false)

    const handleToggle = () => {
        setAnimating(true)
        toggleTheme()
    }

    useEffect(() => {
        if (!animating) return
        const timer = setTimeout(() => setAnimating(false), 500)
        return () => clearTimeout(timer)
    }, [animating])

    return (
        <button
            onClick={handleToggle}
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
        >
            <span className={`inline-block transition-transform duration-500 ${animating ? 'rotate-[360deg]' : ''}`}>
                {dark ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
            </span>
        </button>
    )
}
