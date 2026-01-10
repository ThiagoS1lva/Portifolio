import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import styles from '../styles/ScrollToTop.module.css'

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
            className={`${styles.button} ${visible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <HiArrowUp size={24} />
        </button>
    )
}
