import { useEffect, useLayoutEffect, useRef } from 'react'
import './HeroIntro.css'
import { HERO_INTRO_STORAGE_KEY } from './heroIntroState'

// Timeline (seconds): grid 0–1.1, blockout 1.1–2.2, route 3.3–5.1, runner 5.3–6.9,
// scene recedes 7–8.1 while the hero copy rises in, scene fades out by 9.2.
// Playback speed of the timeline above (1.6 → copy appears at about 4.6s instead of 7.4s).
const SPEED = 1.6
const REVEAL_AT = 7.4
// Keep the canvas mounted until the copy's CSS rise (about 2s of real time) has finished.
const DONE_AT = REVEAL_AT + 2.1 * SPEED

const C = { grid: 'rgba(255,255,255,.22)', top: '#c9d0d9', left: '#8d97a4', right: '#6b7684', accent: '#3182f6', white: '#ffffff' }

type Point = [number, number]
type Block = [x: number, y: number, w: number, d: number, h: number, delay: number]

const blocks: Block[] = [
  [-4.5, 1, 2, 2.5, 2, 0], [-1.5, 1.2, 2.5, 1.8, 1.2, 0.12], [1.5, 0.5, 3, 3, 2.8, 0.24],
  [-4.5, -4.5, 3, 3.5, 3.2, 0.36], [1, -2.5, 2, 2, 1.6, 0.48], [3.4, -2.6, 1.4, 1.8, 2.2, 0.6],
].sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])) as Block[]
const route: Point[] = [[-5, 0], [0, 0], [0, -3.5], [4.6, -3.5]]

const clamp = (v: number) => Math.max(0, Math.min(1, v))
const progress = (t: number, start: number, duration: number) => clamp((t - start) / duration)
const easeOut = (x: number) => 1 - Math.pow(1 - x, 3)
const easeInOut = (x: number) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
const easeBack = (x: number) => 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2)

function pathLength(pts: Point[]) {
  let length = 0
  for (let i = 1; i < pts.length; i++) length += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
  return length
}

function pointAt(pts: Point[], distance: number): Point {
  for (let i = 1; i < pts.length; i++) {
    const [a, b] = [pts[i - 1], pts[i]]
    const length = Math.hypot(b[0] - a[0], b[1] - a[1])
    if (distance <= length) {
      const k = length ? distance / length : 0
      return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]
    }
    distance -= length
  }
  return pts[pts.length - 1]
}

function drawFrame(ctx: CanvasRenderingContext2D, t: number, w: number, h: number) {
  // Transparent canvas: the blockout plays directly over the hero background video.
  ctx.clearRect(0, 0, w, h)
  const recede = easeInOut(progress(t, 7, 1.1))

  const baseScale = Math.min(w * 0.045, h * 0.048)
  const s = baseScale * (1 - 0.35 * recede)
  // Wide screens: the scene slides right of the copy. Narrow screens: it settles below the copy.
  const narrow = w < 760
  const cx = w / 2 + (narrow ? 0 : w * 0.28 * recede)
  const startY = h / 2 + baseScale * 1.1
  const cy = narrow ? startY + (h * 0.72 - startY) * recede : startY
  const iso = (x: number, y: number, z: number): Point => [cx + (x - y) * 0.866 * s, cy + (x + y) * 0.5 * s - z * s]
  const sceneAlpha = (1 - 0.65 * recede) * (1 - easeInOut(progress(t, 8.2, 1)))
  if (sceneAlpha <= 0) return

  const line = (a: Point, b: Point) => { ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke() }
  const dot = (p: Point, r: number, color: string, alpha = 1) => {
    ctx.globalAlpha = sceneAlpha * alpha; ctx.fillStyle = color
    ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, Math.PI * 2); ctx.fill()
  }
  const ring = (p: Point, r: number, alpha: number) => {
    ctx.globalAlpha = sceneAlpha * alpha; ctx.strokeStyle = C.white; ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, Math.PI * 2); ctx.stroke()
  }

  // Ground grid.
  ctx.globalAlpha = sceneAlpha
  ctx.strokeStyle = C.grid
  ctx.lineWidth = 1
  for (let i = 0; i <= 10; i++) {
    const p = easeOut(progress(t, i * 0.05, 0.6))
    if (!p) continue
    const g = i - 5
    line(iso(g, -5, 0), iso(g, -5 + 10 * p, 0))
    line(iso(-5, g, 0), iso(-5 + 10 * p, g, 0))
  }

  // Greybox blocks drop in.
  for (const [x, y, bw, d, bh, delay] of blocks) {
    const p = progress(t, 1.1 + delay, 0.55)
    if (!p) continue
    const z = (1 - easeOut(p)) * 6
    ctx.globalAlpha = sceneAlpha * p
    const face = (pts: [number, number, number][], color: string) => {
      ctx.fillStyle = color
      ctx.beginPath()
      pts.forEach(([px, py, pz], j) => {
        const [sx, sy] = iso(px, py, pz + z)
        if (j) ctx.lineTo(sx, sy)
        else ctx.moveTo(sx, sy)
      })
      ctx.closePath()
      ctx.fill()
    }
    face([[x, y + d, 0], [x + bw, y + d, 0], [x + bw, y + d, bh], [x, y + d, bh]], C.left)
    face([[x + bw, y, 0], [x + bw, y + d, 0], [x + bw, y + d, bh], [x + bw, y, bh]], C.right)
    face([[x, y, bh], [x + bw, y, bh], [x + bw, y + d, bh], [x, y + d, bh]], C.top)
  }

  // Route draws, nodes pop as it reaches them.
  const pts = route.map(([x, y]) => iso(x, y, 0.02))
  const total = pathLength(pts)
  const drawn = easeInOut(progress(t, 3.3, 1.8)) * total
  if (drawn > 0) {
    ctx.globalAlpha = sceneAlpha
    ctx.strokeStyle = C.accent
    ctx.lineWidth = Math.max(2, s * 0.12)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(pts[0][0], pts[0][1])
    let acc = 0
    for (let i = 1; i < pts.length; i++) {
      const seg = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
      if (acc + seg < drawn) ctx.lineTo(pts[i][0], pts[i][1])
      acc += seg
    }
    const head = pointAt(pts, drawn)
    ctx.lineTo(head[0], head[1])
    ctx.stroke()
  }
  let acc = 0
  pts.forEach((p, i) => {
    if (i) acc += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1])
    if (drawn >= acc - 1) dot(p, s * 0.2 * Math.min(easeBack(clamp((drawn - acc) / 18 + 1)), 1.3), C.white)
  })

  // Player runs the route with a short trail.
  const run = easeInOut(progress(t, 5.3, 1.6))
  if (t > 5.3) {
    for (let k = 10; k >= 0; k--) {
      dot(pointAt(pts, total * Math.max(0, run - k * 0.018)), s * (0.3 - k * 0.02), C.accent, k ? (1 - k / 11) * 0.5 : 1)
    }
    ring(pointAt(pts, total * run), s * 0.45, 0.9)
  }
  const arrive = progress(t, 6.9, 0.8)
  if (arrive > 0 && arrive < 1) ring(pts[pts.length - 1], s * 0.4 + s * 1.6 * easeOut(arrive), 1 - arrive)
  ctx.globalAlpha = 1
}

export default function HeroIntro({ onReveal, onDone, onSkip }: { onReveal: () => void; onDone: () => void; onSkip: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)
  const handlers = useRef({ onReveal, onDone, onSkip })
  useLayoutEffect(() => {
    handlers.current = { onReveal, onDone, onSkip }
  })

  useEffect(() => {
    try { sessionStorage.setItem(HERO_INTRO_STORAGE_KEY, '1') } catch { /* storage unavailable */ }
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) {
      handlers.current.onSkip()
      return
    }

    let width = 0
    let height = 0
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    let time = 0
    let last: number | null = null
    let revealed = false
    let frame = requestAnimationFrame(function tick(now) {
      time += last === null ? 0 : Math.min(0.05, (now - last) / 1000) * SPEED
      last = now
      if (!revealed && time >= REVEAL_AT) {
        revealed = true
        handlers.current.onReveal()
      }
      if (time >= DONE_AT) {
        handlers.current.onDone()
        return
      }
      drawFrame(ctx, time, width, height)
      frame = requestAnimationFrame(tick)
    })

    const skip = () => { if (!revealed) handlers.current.onSkip() }
    const onKey = (event: KeyboardEvent) => {
      if (event.target === skipRef.current) return
      if (['Escape', 'ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) skip()
    }
    window.addEventListener('wheel', skip, { passive: true })
    window.addEventListener('touchmove', skip, { passive: true })
    window.addEventListener('scroll', skip, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('wheel', skip)
      window.removeEventListener('touchmove', skip)
      window.removeEventListener('scroll', skip)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="hero-intro">
      <canvas ref={canvasRef} aria-hidden="true" />
      <button ref={skipRef} type="button" className="hero-intro-skip" onClick={onSkip}>
        건너뛰기 <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
