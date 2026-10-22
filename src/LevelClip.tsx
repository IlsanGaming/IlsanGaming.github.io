import { assetUrl } from './assetUrl'
import { useEffect, useRef, useState } from 'react'
import VideoDebug from './VideoDebug'

export default function LevelClip({ src, poster, title, background = false, autoStart = true, playbackGroup, scrollAutoplay = false }: { src: string; poster?: string; title: string; background?: boolean; autoStart?: boolean; playbackGroup?: string; scrollAutoplay?: boolean }) {
  src = assetUrl(src)
  poster = poster ? assetUrl(poster) : undefined
  const videoRef = useRef<HTMLVideoElement>(null)
  const requestPlayback = useRef<() => void>(() => {})
  const manuallyPaused = useRef(false)
  const manualPlayback = useRef(false)
  const [autoplayEnabled, setAutoplayEnabled] = useState(false)
  const [playbackNotice, setPlaybackNotice] = useState('')
  const [lastFailure, setLastFailure] = useState('')
  const [playing, setPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [hasFrame, setHasFrame] = useState(false)
  const [failed, setFailed] = useState(false)
  const debug = background && new URLSearchParams(location.search).get('videoDebug') === '1'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    let disposed = false
    let pending = false
    let blocked = false
    const visibilityThreshold = scrollAutoplay ? 0.35 : 0.2
    const isVisible = () => {
      const r = video.getBoundingClientRect()
      const intersection = Math.max(0, Math.min(r.bottom, innerHeight) - Math.max(r.top, 0)) * Math.max(0, Math.min(r.right, innerWidth) - Math.max(r.left, 0))
      return r.width > 0 && r.height > 0 && intersection / (r.width * r.height) >= visibilityThreshold
    }
    const shouldPlay = () => isVisible() && !document.hidden && !manuallyPaused.current && ((autoStart && (background || scrollAutoplay || !motion.matches)) || manualPlayback.current)
    const sync = () => {
      if (disposed) return
      if (!shouldPlay()) { if (scrollAutoplay) setAutoplayEnabled(false); video.pause(); return }
      if (scrollAutoplay) setAutoplayEnabled(!blocked)
      // One outstanding request, and no policy retries from repeated canplay events.
      if (!video.paused || pending || blocked) return
      if (!video.getAttribute('src')) video.src = src
      pending = true
      void video.play().then(() => {
        if (disposed) return // A previous StrictMode effect must not pause a newer owner.
        if (!shouldPlay()) video.pause()
      }).catch((error: unknown) => {
        if (disposed) return
        const cause = error instanceof Error ? `${error.name}: ${error.message}` : String(error)
        setLastFailure(cause)
        if (error instanceof DOMException && error.name === 'AbortError') return
        blocked = true
        if (scrollAutoplay) setAutoplayEnabled(false)
        setPlaying(false)
        setPlaybackNotice('자동 재생이 제한되었습니다. 영상을 직접 재생할 수 있습니다.')
        console.warn('LevelClip playback failed', { src, cause })
      }).finally(() => { pending = false })
    }
    const onMotion = () => {
      if (background || scrollAutoplay) { sync(); return }
      setAutoplayEnabled(!scrollAutoplay && autoStart && (background || !motion.matches))
      setPlaybackNotice(!background && !scrollAutoplay && motion.matches ? '동작 줄이기 설정으로 자동 재생을 멈췄습니다.' : '')
      manualPlayback.current = false
      blocked = false
      sync()
    }
    requestPlayback.current = () => { blocked = false; sync() }
    setAutoplayEnabled(!scrollAutoplay && autoStart && (background || !motion.matches))
    setPlaybackNotice(!background && !scrollAutoplay && motion.matches ? '동작 줄이기 설정으로 자동 재생을 멈췄습니다.' : '')
    const observer = new IntersectionObserver(() => {
      if (!isVisible()) manualPlayback.current = false
      sync()
    }, { threshold: [0, visibilityThreshold] })
    observer.observe(video)
    motion.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', sync)
    video.addEventListener('canplay', sync)
    let frameCallback = 0
    setHasFrame(false)
    const onFirstFrame = () => {
      if (!background) return
      if (typeof video.requestVideoFrameCallback === 'function') {
        if (frameCallback) video.cancelVideoFrameCallback(frameCallback)
        frameCallback = video.requestVideoFrameCallback(() => { if (!disposed) setHasFrame(true) })
      } else if (video.readyState >= 2) setHasFrame(true)
    }
    video.addEventListener('playing', onFirstFrame)
    if (!video.paused) onFirstFrame()
    const onGroupPlay = (event: Event) => {
      const detail = (event as CustomEvent).detail
      if (playbackGroup && detail.group === playbackGroup && detail.video !== video) {
        manuallyPaused.current = true
        manualPlayback.current = false
        video.pause()
      }
    }
    window.addEventListener('levelclip:play', onGroupPlay)
    sync()
    return () => {
      disposed = true
      if (frameCallback) video.cancelVideoFrameCallback(frameCallback)
      video.removeEventListener('playing', onFirstFrame)
      observer.disconnect()
      window.removeEventListener('levelclip:play', onGroupPlay)
      motion.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', sync)
      video.removeEventListener('canplay', sync)
      video.pause()
    }
  }, [src, autoStart, playbackGroup, background, scrollAutoplay])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (!video.paused) {
      if (background || scrollAutoplay) setAutoplayEnabled(false)
      setUserPaused(true)
      manuallyPaused.current = true
      manualPlayback.current = false
      video.pause()
    } else {
      setUserPaused(false)
      manuallyPaused.current = false
      manualPlayback.current = true
      if (failed && scrollAutoplay) { setFailed(false); video.load() }
      requestPlayback.current()
    }
  }

  return <div className={background ? 'hero-background' : 'project-media level-clip'}>
    <video ref={videoRef} src={background ? src : undefined} poster={poster} autoPlay={(background || scrollAutoplay) && autoplayEnabled} muted loop playsInline preload={background ? 'metadata' : 'none'}
      aria-hidden={background || undefined} tabIndex={background ? -1 : undefined} aria-label={background ? undefined : `${title} 플레이 영상`}
      onPlaying={() => { setPlaying(true); setPlaybackNotice('') }}
      onPlay={() => { if (playbackGroup) window.dispatchEvent(new CustomEvent('levelclip:play', { detail: { group: playbackGroup, video: videoRef.current } })) }}
      onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
    {background && !hasFrame && poster && <img className="hero-poster" src={poster} alt="" />}
    {background && !failed && (playing || playbackNotice || userPaused) && <button type="button" className="hero-play-fallback" onClick={togglePlayback} title={playbackNotice || undefined} aria-label={`Hero 배경 영상 ${playing ? "일시 정지" : "재생"}`}>{playing ? "Ⅱ 배경 영상 일시 정지" : "▷ 배경 영상 재생"}</button>}
    {!background && (failed ? <div className="clip-fallback" role="status"><span>영상을 불러올 수 없습니다.</span><small>플레이 클립 준비 상태를 확인해 주세요.</small>{scrollAutoplay && <button type="button" className="clip-control" style={{ position: "static", marginTop: 8 }} onClick={togglePlayback} aria-label={`${title} 영상 다시 재생`}>▷ 다시 재생</button>}</div>
      : (!scrollAutoplay || playing || playbackNotice || userPaused) && <button type="button" className={`clip-control ${playing || scrollAutoplay ? 'is-playing' : ''}`} onClick={togglePlayback} aria-label={`${title} 영상 ${playing ? '일시 정지' : '재생'}`}><span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span> {playing ? '일시 정지' : '플레이 클립 재생'}</button>)}
    {debug && <VideoDebug videoRef={videoRef} lastFailure={lastFailure} />}
  </div>
}




