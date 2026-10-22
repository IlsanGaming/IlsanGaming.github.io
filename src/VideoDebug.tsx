import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { createPortal } from 'react-dom'

export const VIDEO_REVISION = 'hero-autoplay-debug-20261020-v2'
export default function VideoDebug({ videoRef, lastFailure }: { videoRef: RefObject<HTMLVideoElement | null>; lastFailure: string }) {
  const [snapshot, setSnapshot] = useState<Record<string, unknown>>({})
  const [copied, setCopied] = useState(false)
  const frames = useRef(0)
  const [browserStorage, setBrowserStorage] = useState<Record<string, unknown>>({})
  useEffect(() => {
    let disposed = false
    void Promise.all([
      'serviceWorker' in navigator ? navigator.serviceWorker.getRegistrations().then(items => items.map(i => i.active?.scriptURL)) : Promise.resolve([]),
      'caches' in window ? caches.keys() : Promise.resolve([]),
    ]).then(([registrations, cacheNames]) => { if (!disposed) setBrowserStorage({ serviceWorkers: registrations, cacheNames }) }).catch(error => { if (!disposed) setBrowserStorage({ storageCheck: String(error) }) })
    return () => { disposed = true }
  }, [])
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let frameId = 0
    const onFrame = () => { frames.current++; frameId = video.requestVideoFrameCallback(onFrame) }
    if ('requestVideoFrameCallback' in video) frameId = video.requestVideoFrameCallback(onFrame)
    const update = () => {
      const style = getComputedStyle(video)
      const bounds = video.getBoundingClientRect()
      const poster = video.parentElement?.querySelector<HTMLImageElement>('.hero-poster')
      const posterStyle = poster ? getComputedStyle(poster) : null
      const posterOnTop = !!poster && posterStyle?.display !== 'none' && posterStyle?.visibility !== 'hidden' && Number(posterStyle?.opacity) > 0
      setSnapshot({
        revision: VIDEO_REVISION, page: location.href, url: video.currentSrc || video.src,
        paused: video.paused, currentTime: Number(video.currentTime.toFixed(3)), readyState: video.readyState,
        muted: video.muted, defaultMuted: video.defaultMuted, autoplay: video.autoplay, loop: video.loop, playsInline: video.playsInline,
        visibilityState: document.visibilityState, reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
        videoError: video.error ? `${video.error.code}: ${video.error.message}` : null,
        lastPlayFailure: lastFailure || null, display: style.display, visibility: style.visibility, opacity: style.opacity,
        filter: style.filter, objectFit: style.objectFit, videoZIndex: style.zIndex,
        parentZIndex: video.parentElement ? getComputedStyle(video.parentElement).zIndex : null,
        size: `${Math.round(bounds.width)} × ${Math.round(bounds.height)}`, decodedSize: `${video.videoWidth} × ${video.videoHeight}`,
        inViewport: bounds.bottom > 0 && bounds.top < innerHeight, posterOnTop, posterZIndex: posterStyle?.zIndex ?? null,
        presentedFrames: frames.current, decodedFrames: video.getVideoPlaybackQuality?.().totalVideoFrames ?? null,
        serviceWorkerController: navigator.serviceWorker?.controller?.scriptURL ?? null,
        ...browserStorage,
      })
    }
    update()
    const timer = window.setInterval(update, 350)
    return () => { clearInterval(timer); if (frameId) video.cancelVideoFrameCallback(frameId) }
  }, [videoRef, lastFailure, browserStorage])
  return createPortal(<aside className="video-debug" aria-label="Hero 영상 진단"><details open><summary>Hero 영상 진단 · videoDebug=1</summary><p>시간·프레임 값이 함께 증가하는지 확인하세요. 진단 버전: {VIDEO_REVISION}</p><pre>{JSON.stringify(snapshot, null, 2)}</pre><button type="button" onClick={() => { void navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2)).then(() => setCopied(true)).catch(() => setCopied(false)) }}>{copied ? '진단 정보 복사됨' : '진단 정보 복사'}</button><small>복사가 제한되면 위 내용을 선택해 복사할 수 있습니다.</small></details></aside>, document.body)
}


