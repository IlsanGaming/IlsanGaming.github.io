import { operationDeltaExperience, projectLExperience } from './careerData'
import { projectInfo } from './projectData'
import './ProjectDetails.css'

const deltaDetails = [
  ['담당 작업 (1인 개발)', '본인 - 레벨 설계, 블록아웃, 시네마틱 연출\nAI - 프롭 및 블루프린트 구현'],
  ['사용 엔진', operationDeltaExperience.engine],
  ['제작 기간', `${projectInfo.period.start.replaceAll('-', '.')} – ${projectInfo.period.end.replaceAll('-', '.')} (${projectInfo.period.weeks}주)`],
  ['설계 범위', '병원 로비부터 연구소 옥상까지\n공간 배치 · 탈출 동선 · 이벤트 순서'],
]

const projectLDetails = [
  ['담당 작업 (1인 개발)', '레벨 기획 · 블록아웃 · 시네마틱 연출'],
  ['사용 엔진', projectLExperience.engine],
  ['제작 기간', '2026.10.24 – 2026.11.21 (4주)'],
  ['AI 활용 예시', '공성탑이 성벽에 닿기 전부터 긴장감을 주고 싶었습니다. 투석기 포격과 화살비를 기획하고 구현은 AI에 맡겼습니다.'],
]

export default function ProjectDetails({ overviewId, isProjectL }: { overviewId: string; isProjectL: boolean }) {
  const details = isProjectL ? projectLDetails : deltaDetails

  return <div className="play-project-info">
    <div className="play-project-overview">
      <h2 id={overviewId} tabIndex={-1}>OVERVIEW</h2>
      {isProjectL
        ? <>
            <h3>앞선 병사가 해낸 일이 다음 병사의 길을 엽니다.</h3>
            <p>로스트아크 ‘영광의 벽’에서 영감을 받아 만든 3인칭 액션 레벨입니다.<br />공성전에서 세 병사를 번갈아 조작합니다.<br />A가 공성탑에서 성벽에 오르고 B가 성문 위를 확보하면, C가 충차로 성문을 열고 안뜰에 들어갑니다.</p>
          </>
        : <>
            <p>서대문 병원에서 연구소 옥상까지 탈출로를 찾는 3인칭 좀비 생존 호러 레벨입니다.<br />플레이어는 주변 단서를 보고 다음 행동을 정합니다. 그 행동이 새로운 위험을 부르면 탈출 경로도 달라집니다.<br />처음에는 좀비를 피해 달아나지만 무기를 얻은 뒤에는 같은 위협에 맞설 수 있습니다.</p>
          </>}
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
