import { useEffect, useRef } from 'react'

const getPalette = (theme) => {
  if (theme === 'dark') {
    return {
      particle: '129, 140, 248',
      line: '94, 234, 212',
    }
  }

  return {
    particle: '79, 70, 229',
    line: '13, 148, 136',
  }
}

export default function BackgroundMesh() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: null, y: null, radius: 150 }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let frameId = 0
    let particleCount = 56
    let linkDistance = 150
    let particles = []
    let palette = getPalette(document.documentElement.getAttribute('data-theme'))

    const rebuildParticles = () => {
      particleCount = width < 768 ? 34 : 56
      linkDistance = width < 768 ? 110 : 150

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.44,
        vy: (Math.random() - 0.5) * 0.44,
        size: Math.random() * 2 + 0.9,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      rebuildParticles()
    }

    const drawParticle = (particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${palette.particle}, 0.52)`
      ctx.fill()
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < linkDistance) {
            const opacity = (1 - distance / linkDistance) * 0.8
            ctx.strokeStyle = `rgba(${palette.line}, ${opacity.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const update = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (mouse.x != null) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const angle = Math.atan2(dy, dx)
            particle.x -= Math.cos(angle) * force * 1.6
            particle.y -= Math.sin(angle) * force * 1.6
          }
        }

        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      update()
      drawConnections()
      particles.forEach(drawParticle)

      if (!reduceMotion) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const observer = new MutationObserver(() => {
      palette = getPalette(document.documentElement.getAttribute('data-theme'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    resize()
    render()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div className="bg-gradient" aria-hidden="true" />
      <canvas ref={canvasRef} id="particleCanvas" className="bg-canvas" aria-hidden="true" />
    </>
  )
}