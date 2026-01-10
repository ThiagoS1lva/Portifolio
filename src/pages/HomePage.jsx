import { useEffect, useRef } from 'react'

import SectionStart from "../ui/components/SectionStart"
import SectionSkill from "../ui/components/SectionSkill"
import SectionSobre from "../ui/components/SectionSobre"
import SectionExperiencia from "../ui/components/SectionExperiencia"
import SectionPortifolio from "../ui/components/SectionPortifolio"
import SectionAcademy from "../ui/components/SectionAcademy"
import SectionContato from "../ui/components/SectionContato"

export default function Home() {
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        const elements = containerRef.current?.querySelectorAll('.animate-on-scroll')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={containerRef}>
            <SectionStart />
            <SectionSobre />
            <SectionExperiencia />
            <SectionSkill />
            <SectionPortifolio />
            <SectionAcademy />
            <SectionContato />
        </div>
    )
}