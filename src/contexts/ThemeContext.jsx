import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem('theme')
        if (stored) return stored === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    const toggleTheme = () => setDark(prev => !prev)

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
