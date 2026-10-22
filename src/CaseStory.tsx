import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import './LobbyStory.css'

export type StorySlide = {
  stage: string; title: string; accent: string; sentences: ReactNode[]
  numeric?: boolean; note?: string; conclusion?: string
}
export default function CaseStory({ slides, title, variant = "", showStepLabel = true }: { slides: StorySlide[]; title: string; variant?: string; showStepLabel?: boolean }) {
  const [index, setIndex] = useState(0)
  const id = useId()
  const slide = slides[index]
  const number = String(index + 1).padStart(2, '0')
  const total = String(slides.length).padStart(2, '0')
  return <div className={`lobby-story ${variant}`}>
    <div className="lobby-story-carousel" role="region" aria-roledescription="카드뉴스" aria-label={`${title} 기획 요약`} tabIndex={0}
      onKeyDown={event => {
        let next = index
        if (event.key === 'ArrowRight') next = Math.min(slides.length - 1, index + 1)
        else if (event.key === 'ArrowLeft') next = Math.max(0, index - 1)
        else if (event.key === 'Home') next = 0
        else if (event.key === 'End') next = slides.length - 1
        else return
        event.preventDefault()
        setIndex(next)
      }}>
      <div id={id} className="lobby-story-slide" key={index} role="group" aria-roledescription="슬라이드" aria-label={`${number} / ${total} · ${slide.stage}`} aria-live="polite" aria-atomic="true">
        <div className="lobby-story-top">
          {showStepLabel && <p className="lobby-story-stage">{number} — {slide.stage}</p>}
          <h4 className={slide.numeric ? 'lobby-story-headline is-numeric' : 'lobby-story-headline'}>{slide.title}</h4>
          <p className="lobby-story-accent">{slide.accent}</p>
          {slide.note && <p className="lobby-story-note">{slide.note}</p>}
        </div>
        <div className="lobby-story-bottom">{slide.sentences.map((sentence, i) => <p key={i}>{sentence}</p>)}{slide.conclusion && <p><strong>{slide.conclusion}</strong></p>}</div>
      </div>
      <div className="lobby-story-controls">
        <button type="button" aria-label="이전 카드" aria-controls={id} disabled={index === 0} onClick={() => setIndex(index - 1)}>← 이전</button>
        <span className="lobby-story-count" aria-label={`현재 ${index + 1}장, 전체 ${slides.length}장`}>{number} / {total}</span>
        <button type="button" aria-label="다음 카드" aria-controls={id} disabled={index === slides.length - 1} onClick={() => setIndex(index + 1)}>다음 →</button>
      </div>
      <div className="lobby-story-indicators" aria-label="카드 선택">{slides.map((item, i) => <button key={item.stage} type="button" aria-label={`${i + 1}장 ${item.stage}`} aria-current={index === i ? 'step' : undefined} aria-controls={id} onClick={() => setIndex(i)}><span /></button>)}</div>
    </div>
  </div>
}
