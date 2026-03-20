import { useEffect, useRef, useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Particles() {
    const canvasRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const { dark } = useContext(ThemeContext)

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
        const particleCount = 80

        const darkColors = [
            'rgba(99, 102, 241, 0.4)',
            'rgba(52, 211, 153, 0.3)',
            'rgba(56, 189, 248, 0.3)',
        ]

        const lightColors = [
            'rgba(99, 102, 241, 0.25)',
            'rgba(16, 185, 129, 0.2)',
            'rgba(14, 165, 233, 0.2)',
        ]

        const colors = dark ? darkColors : lightColors
        const lineColor = dark ? 'rgba(148, 163, 184,' : 'rgba(100, 116, 139,'

        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * dimensions.width
                this.y = Math.random() * dimensions.height
                this.size = Math.random() * 3 + 1
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.color = colors[Math.floor(Math.random() * colors.length)]
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

                ctx.shadowBlur = 10
                ctx.shadowColor = this.color
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

                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.1
                        ctx.beginPath()
                        ctx.strokeStyle = `${lineColor} ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[j].y)
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
    }, [dimensions, dark])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            width={dimensions.width}
            height={dimensions.height}
        />
    )
}
