import { operationDeltaExperience, projectLExperience } from './careerData'
import './ProjectDetails.css'

const deltaDetails = [
  [operationDeltaExperience.roleLabel, operationDeltaExperience.role.join(' · ')],
  ['사용 엔진', operationDeltaExperience.engine],
  ['설계 범위', '병원 로비부터 연구소 옥상까지의 공간 배치 · 탈출 동선 · 주요 이벤트 순서'],
]

const projectLDetails = [
  ['담당', '레벨 기획 · 블록아웃 · 시네마틱 연출'],
  ['제작', '1인 개발 · AI 제작 보조'],
  ['사용 엔진', projectLExperience.engine],
]

export default function ProjectDetails({ overviewId, isProjectL }: { overviewId: string; isProjectL: boolean }) {
  const details = isProjectL ? projectLDetails : deltaDetails

  return <div className="play-project-info">
    <div className="play-project-overview">
      <h2 id={overviewId} tabIndex={-1}>OVERVIEW</h2>
      {isProjectL
        ? <>
            <h3>세 병사가 각자의 자리에서 성을 한 단계씩 무너뜨립니다.</h3>
            <p>로스트아크 ‘영광의 벽’에서 영감을 받아, 공성전을 병사의 눈높이에서 풀어낸 3인칭 액션 레벨입니다. A가 공성탑에서 성벽에 오르고, B가 성문 위를 확보하면, C가 충차로 성문을 열고 안뜰에 들어갑니다. 조작하는 병사가 바뀔 때마다 앞선 병사가 해낸 일이 다음 병사의 길을 엽니다.</p>
          </>
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
