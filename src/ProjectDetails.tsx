import { operationDeltaExperience, projectLExperience } from './careerData'
import './ProjectDetails.css'

const deltaDetails = [
  [operationDeltaExperience.roleLabel, operationDeltaExperience.role.join(' · ')],
  ['사용 엔진', operationDeltaExperience.engine],
  ['설계 범위', '병원 로비부터 연구소 옥상까지의 공간 배치 · 탈출 동선 · 주요 이벤트 순서'],
]

const projectLDetails = [
  [projectLExperience.roleLabel, projectLExperience.role.join(' · ')],
  ['사용 엔진', projectLExperience.engine],
]

export default function ProjectDetails({ overviewId, isProjectL }: { overviewId: string; isProjectL: boolean }) {
  const details = isProjectL ? projectLDetails : deltaDetails

  return <div className="play-project-info">
    <div className="play-project-overview">
      <h2 id={overviewId} tabIndex={-1}>OVERVIEW</h2>
      {isProjectL
        ? <p>{projectLExperience.description} 플레이어는 세 병사의 시점을 오가며 성벽을 점령하고 본성으로 진입합니다.</p>
        : <p>좀비 사태가 발생한 서대문 병원에서 탈출 경로를 찾아가는 3인칭 생존 호러 레벨입니다. 플레이어의 행동이 다음 사건으로 이어지고, 막힌 길에서는 주변 단서를 통해 우회로를 찾도록 설계했습니다.</p>}
    </div>
    <dl className="project-detail-rows" aria-label="프로젝트 정보" data-columns={details.length}>
      {details.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
}
