import { useState, useEffect } from 'react'

export function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))
                if (text.length - 1 === 0) {
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

    return text
}
