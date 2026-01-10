import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Particles.module.css'

export default function Particles() {
    const canvasRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId

        const particles = []
        const particleCount = 60

        const colors = [
            'rgba(99, 102, 241, 0.5)',
            'rgba(236, 72, 153, 0.4)',
            'rgba(6, 182, 212, 0.4)',
        ]

        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * dimensions.width
                this.y = Math.random() * dimensions.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = (Math.random() - 0.5) * 0.5
                this.speedY = (Math.random() - 0.5) * 0.5
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x < 0 || this.x > dimensions.width) this.speedX *= -1
                if (this.y < 0 || this.y > dimensions.height) this.speedY *= -1
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.15
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            connectParticles()
            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [dimensions])

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            width={dimensions.width}
            height={dimensions.height}
        />
    )
}
