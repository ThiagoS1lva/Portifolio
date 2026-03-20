import { useEffect, useRef, Suspense, lazy } from 'react'

import SectionStart from "../ui/components/SectionStart"
import SkeletonSection from "../ui/components/SkeletonSection"

const SectionSobre = lazy(() => import("../ui/components/SectionSobre"))
const SectionExperiencia = lazy(() => import("../ui/components/SectionExperiencia"))
const SectionSkill = lazy(() => import("../ui/components/SectionSkill"))
const SectionPortifolio = lazy(() => import("../ui/components/SectionPortifolio"))
const SectionAcademy = lazy(() => import("../ui/components/SectionAcademy"))
const SectionContato = lazy(() => import("../ui/components/SectionContato"))

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

    const fallback = <SkeletonSection />

    return (
        <div ref={containerRef}>
            <SectionStart />
            <Suspense fallback={fallback}><SectionSobre /></Suspense>
            <Suspense fallback={fallback}><SectionExperiencia /></Suspense>
            <Suspense fallback={fallback}><SectionSkill /></Suspense>
            <Suspense fallback={fallback}><SectionPortifolio /></Suspense>
            <Suspense fallback={fallback}><SectionAcademy /></Suspense>
            <Suspense fallback={fallback}><SectionContato /></Suspense>
        </div>
    )
}
