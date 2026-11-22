import { useState } from 'react'
import { assetUrl } from './assetUrl'
import { cases } from './projectData'
import type { LevelStudy, ProjectImage } from './projectData'
import LevelClip from './LevelClip'
import LobbyStory from './LobbyStory'
import SkybridgeStory from './SkybridgeStory'
import QuarantineStory from './QuarantineStory'
import LaboratoryStory from './LaboratoryStory'
import HQStory from './HQStory'
import './LevelStudies.css'

const caseStories = {
  'lobby-sheet': LobbyStory,
  'skybridge-story': SkybridgeStory,
  'quarantine-story': QuarantineStory,
  'laboratory-story': LaboratoryStory,
  'hq-story': HQStory,
}

const routeStops = ['병실·병원 로비', '직원 통로', '최상층', '병원 앞·출구', '격리구역', 'HQ(지휘소)', '연구소 1층·옥상']
const routeMapSrc = '/images/operation-delta-level-map.webp'

function Placeholder({ text }: { text: string }) {
  return <div className="placeholder"><span className="image-symbol" aria-hidden="true">▧</span><span>{text}</span><small>이미지 준비 중</small></div>
}
function ProjectMedia({ image, text }: { image?: ProjectImage; text: string }) {
  const [failed, setFailed] = useState(false)
  return <div className="project-media">{image && !failed ? <img src={image.src} alt={image.alt} loading="lazy" onError={() => setFailed(true)} /> : <Placeholder text={text} />}</div>
}

function renderCase(item: LevelStudy) {
  const Story = item.detailLayout && caseStories[item.detailLayout]

  return <article className="case-card" key={item.label}>
    <header className="level-case-header">
      <h3><span>{item.label}</span> {item.title}</h3>
      <p>{item.focus}</p>
    </header>
    <div className="level-case-content">
      {item.video
        ? <LevelClip src={item.video} poster={item.poster} title={item.title} scrollAutoplay />
        : <ProjectMedia image={item.image} text={`${item.title} 스크린샷 영역`} />}
      <div className="case-records" role="region" aria-label={`${item.title} 사례 기록`} tabIndex={0}>
        {Story && <Story />}
      </div>
    </div>
  </article>
}

export default function LevelStudies() {
  const mapUrl = assetUrl(routeMapSrc)

  return <section id="levels" className="section soft"><div className="container">
    <h2 className="level-studies-heading">Level Design Details</h2>
    <div className="level-studies-workspace">
      <div className="level-route">
        <h3>전체 이동 동선도</h3>
        <figure>
          <a className="level-route-preview" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label="전체 이동 동선도 크게 보기, 새 탭에서 열기">
            <img src={mapUrl} alt="병원 로비에서 연구소 옥상까지 이동하는 방향을 화살표와 1~7번으로 표시한 평면도" width={1135} height={684} loading="lazy" />
            <span aria-hidden="true">동선도 크게 보기 ↗</span>
          </a>
          <figcaption>
            <ol>{routeStops.map(stop => <li key={stop}>{stop}</li>)}</ol>
          </figcaption>
        </figure>
      </div>
      <div className="level-studies-cases">
        {cases.map(renderCase)}
      </div>
    </div>
  </div></section>
}
