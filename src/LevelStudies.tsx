import { useLayoutEffect, useRef, useState } from 'react'
import { cases } from './projectData'
import type { LevelStudy, ProjectImage } from './projectData'
import LevelClip from './LevelClip'
import LobbyStory from './LobbyStory'
import SkybridgeStory from './SkybridgeStory'
import QuarantineStory from './QuarantineStory'
import LaboratoryStory from './LaboratoryStory'
import HQStory from './HQStory'
import './LevelStudies.css'

function Placeholder({ text }: { text: string }) {
  return <div className="placeholder"><span className="image-symbol" aria-hidden="true">▧</span><span>{text}</span><small>이미지 준비 중</small></div>
}
function ProjectMedia({ image, text }: { image?: ProjectImage; text: string }) {
  const [failed, setFailed] = useState(false)
  return <div className="project-media">{image && !failed ? <img src={image.src} alt={image.alt} loading="lazy" onError={() => setFailed(true)} /> : <Placeholder text={text} />}</div>
}

function renderCase(item: LevelStudy) {
  return <article className={`case-card${item.detailLayout === "lobby-sheet" ? " case-card-lobby" : ""}${(item.detailLayout === "skybridge-story" || item.detailLayout === "quarantine-story" || item.detailLayout === "laboratory-story" || item.detailLayout === "hq-story") ? " case-card-story" : ""}${item.wide ? " case-card-wide" : ""}`} key={item.label}><div className="case-scene">{item.video ? <LevelClip src={item.video} poster={item.poster} title={item.title} scrollAutoplay /> : <ProjectMedia image={item.image} text={`${item.title} 스크린샷 영역`} />}<div className="case-body"><div className="case-title"><h3>{item.title}</h3><span>{item.label}</span></div><p>{item.focus}</p><ol className="flow">{item.steps.map(step => <li key={step}>{step}</li>)}</ol></div></div><div className="case-records" role="region" aria-label={`${item.title} 사례 기록`} tabIndex={0}>{item.detailLayout === "lobby-sheet" ? <LobbyStory /> : item.detailLayout === "skybridge-story" ? <SkybridgeStory /> : item.detailLayout === "quarantine-story" ? <QuarantineStory /> : item.detailLayout === "laboratory-story" ? <LaboratoryStory /> : item.detailLayout === "hq-story" ? <HQStory /> : null}</div></article>
}

export default function LevelStudies() {
  const [expanded, setExpanded] = useState(false)
  const moreButton = useRef<HTMLButtonElement>(null)
  const additional = useRef<HTMLDivElement>(null)
  const pending = useRef<{ action: 'expand' | 'collapse'; scrollTop: number } | null>(null)

  useLayoutEffect(() => {
    const change = pending.current
    if (!change) return
    pending.current = null
    if (change.action === 'expand') {
      window.scrollTo({ top: change.scrollTop, behavior: 'instant' })
      additional.current?.querySelector<HTMLElement>('.case-records')?.focus({ preventScroll: true })
    } else {
      moreButton.current?.focus({ preventScroll: true })
      moreButton.current?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }
  }, [expanded])

  const toggle = (next: boolean) => {
    pending.current = { action: next ? 'expand' : 'collapse', scrollTop: window.scrollY }
    setExpanded(next)
  }

  return <section id="levels" className="section soft"><div className="container">
    <p className="eyebrow">Scenes That Shape Player Choices</p><h2>Level Design Details</h2>
    <div className="case-grid">
      {cases.slice(0, 1).map(renderCase)}
      <div id="additional-level-cases" ref={additional} className="additional-level-cases" hidden={!expanded}>
        {expanded && cases.slice(1).map(renderCase)}
      </div>
      {expanded ? <div className="case-collapse"><button type="button" className="button secondary" aria-expanded={true} aria-controls="additional-level-cases" onClick={() => toggle(false)}>접기 ↑</button></div>
        : <div className="case-preview">
          <div className="case-preview-content" aria-hidden="true">
            <span>{cases[1].label}</span><h3>{cases[1].title}</h3><p>{cases[1].focus}</p>
          </div>
          <button ref={moreButton} type="button" className="button primary" aria-expanded={false} aria-controls="additional-level-cases" onClick={() => toggle(true)}>+더보기</button>
        </div>}
    </div>
  </div></section>
}
