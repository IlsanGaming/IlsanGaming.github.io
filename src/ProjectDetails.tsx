import { assetUrl } from './assetUrl'
import './ProjectDetails.css'

const details = [
  ['장르', '3인칭 좀비 생존 호러'],
  ['엔진', 'Unreal Engine 5.8'],
  ['제작 기간', '2026.09.21 – 2026.10.19'],
  ['제작 보조', 'Blender MCP · Unreal MCP'],
]
const overview = [
  "Operation: Delta는 좀비 사태가 발생한 가상의 '서대문 병원'과 인근 시설을 배경으로 제작한 3인칭 생존 호러 레벨입니다.",
  '플레이어가 직접 탈출 경로를 발견하고, 막힌 길을 우회하며, 정보를 수집하고 전투를 통해 탈출하도록 설계했습니다.',
  '공간 배치와 시각적 단서, 연속된 사건을 통해 플레이어가 왜 그 길을 선택하는지 실제 플레이로 보여주는 프로젝트입니다.',
]

export default function ProjectDetails() {
  return <div className="play-project-info">
    <div className="play-project-details">
      <h3>PROJECT DETAILS</h3>
      <dl className="project-detail-rows">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="project-detail-links">
        <a className="text-link" href={assetUrl("/documents/Operation_Delta_Level_Design_Portfolio.pdf")} target="_blank" rel="noopener noreferrer" aria-label="레벨 디자인 포트폴리오 PDF, 새 탭에서 열기">레벨 디자인 포트폴리오 PDF ↗</a>
        <a className="text-link" href="https://youtu.be/iVRXsP2-A-A" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a>
      </div>
    </div>
    <div className="play-project-overview">
      <h3>OVERVIEW</h3>
      {overview.map(text => <p key={text}>{text}</p>)}
    </div>
  </div>
}
