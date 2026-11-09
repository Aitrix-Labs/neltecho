import { useEffect, useRef } from 'react'
import { asset } from '../asset'

/** Animated hero backdrop modeled on SentinelOne's Unicorn Studio bokeh scene. */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const orb = new Image()
    orb.src = asset('images/anim/hero-orb.jpg')
    const fallback = new Image()
    fallback.src = asset('images/hero/hero-bg.webp')

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const blobs = Array.from({ length: 7 }, (_, i) => ({
      x: 0.2 + (i % 4) * 0.2,
      y: 0.25 + Math.floor(i / 4) * 0.35,
      r: 0.18 + (i % 3) * 0.08,
      speed: 0.15 + i * 0.03,
      phase: i * 1.1,
      hue: i % 2 === 0 ? '155,0,255' : '90,0,200',
    }))

    const resize = () => {
      const parent = canvas.parentElement
      w = parent?.clientWidth || window.innerWidth
      h = parent?.clientHeight || window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t: number) => {
      const time = t * 0.001
      ctx.clearRect(0, 0, w, h)

      const bg = ctx.createLinearGradient(0, 0, 0, h)
      bg.addColorStop(0, '#2a0466')
      bg.addColorStop(0.45, '#4b00b8')
      bg.addColorStop(1, '#0b0020')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      if (fallback.complete && fallback.naturalWidth) {
        ctx.globalAlpha = 0.55
        const scale = Math.max(w / fallback.naturalWidth, h / fallback.naturalHeight) * 1.08
        const dw = fallback.naturalWidth * scale
        const dh = fallback.naturalHeight * scale
        const ox = (w - dw) / 2 + Math.sin(time * 0.12) * 18
        const oy = (h - dh) / 2 + Math.cos(time * 0.1) * 12
        ctx.drawImage(fallback, ox, oy, dw, dh)
        ctx.globalAlpha = 1
      }

      for (const blob of blobs) {
        const x = (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.06) * w
        const y = (blob.y + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.05) * h
        const radius = blob.r * Math.min(w, h)
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius)
        grad.addColorStop(0, `rgba(${blob.hue},0.55)`)
        grad.addColorStop(0.45, `rgba(${blob.hue},0.18)`)
        grad.addColorStop(1, `rgba(${blob.hue},0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      if (orb.complete && orb.naturalWidth) {
        const size = Math.min(w, h) * 0.72
        const cx = w * 0.5 + Math.sin(time * 0.2) * 20
        const cy = h * 0.48 + Math.cos(time * 0.18) * 16
        ctx.save()
        ctx.globalAlpha = 0.42
        ctx.globalCompositeOperation = 'screen'
        ctx.translate(cx, cy)
        ctx.rotate(Math.sin(time * 0.08) * 0.08)
        ctx.drawImage(orb, -size / 2, -size / 2, size, size)
        ctx.restore()
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 1
      }

      // vignette
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.15, w * 0.5, h * 0.55, h * 0.85)
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(10,0,30,0.72)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, w, h)

      // soft grid
      ctx.save()
      ctx.globalAlpha = 0.08
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 1
      const step = 72
      const drift = (time * 12) % step
      for (let x = -step; x < w + step; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, -drift)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = -step; y < h + step; y += step) {
        ctx.beginPath()
        ctx.moveTo(0, y + drift)
        ctx.lineTo(w, y + drift)
        ctx.stroke()
      }
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="hero-media" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-canvas" />
      <img className="hero-dashboard-float" src={asset('images/hero/hero-dashboard.webp')} alt="" />
    </div>
  )
}
