import CaseStory from './CaseStory'
import LevelClip from './LevelClip'
import LevelRouteMap from './LevelRouteMap'
import './LevelStudies.css'

type Study = {
  section: string
  headline: string
  description: string
  video: { src: string; poster: string }
}

const studies: Study[] = [
  {
    section: '공성탑 · 성벽 상륙',
    headline: '공성탑에서 본 본성의 첨탑이 안뜰에서 다시 보입니다.',
    description: '공성탑에서는 성벽 너머로 본성의 첨탑이 처음 보입니다. 성벽을 따라 이동하는 동안에도 첨탑을 보며 방향을 확인할 수 있게 했습니다. 안뜰에 들어서면 붉은 카펫이 첨탑이 보이는 쪽으로 이어집니다.',
    video: { src: '/videos/project-l-landmark.mp4', poster: '/videos/project-l-landmark.webp' },
  },
  {
    section: '성벽 붕괴 · 두 번째 포대',
    headline: '화살이 정면 접근을 압박하고, 횃불이 측면 사다리로 안내합니다.',
    description: '성벽이 무너져 위쪽 보행로가 끊기면, 플레이어는 왼쪽 계단으로 내려갑니다. 포대 정면 계단에는 위에서 화살이 날아와 곧장 오르기 어렵습니다. 아래 통로에서 횃불을 따라가면 측면 사다리가 보이고, 그 사다리로 포대에 올라갑니다.',
    video: { src: '/videos/project-l-ladder.mp4', poster: '/videos/project-l-ladder.webp' },
  },
  {
    section: '첫 문 · 시점 전환',
    headline: 'A가 열어 달라고 외친 문을 B가 반대편에서 엽니다.',
    description: '잠긴 문에 막힌 A는 아래에 있는 B분대에 문을 열어 달라고 요청합니다. 조작이 B로 넘어가면, 플레이어는 건너편으로 이동해 문 안쪽의 개폐 장치를 돌립니다.',
    video: { src: '/videos/project-l-switch.mp4', poster: '/videos/project-l-switch.webp' },
  },
  {
    section: '성문 위 교전 · 충차 엄호',
    headline: '한쪽 화살병을 쓰러뜨려도, 충차는 움직일 수 없습니다.',
    description: '성문 근처에 모여 있던 궁수들을 성벽 양 끝의 돌출부로 나눠 배치했습니다. B가 가까운 쪽 궁수를 제압해도 건너편에서 충차를 향해 계속 화살이 날아옵니다. B가 성벽을 건너 남은 궁수까지 제압하면, C가 충차를 밀어 성문을 돌파합니다.',
    video: { src: '/videos/project-l-ram-guard.mp4', poster: '/images/project-l-ram-guard.webp' },
  },
  {
    section: '안뜰 · 본성 진입',
    headline: '안뜰 전투가 끝나면, 붉은 카펫이 본성으로 이끕니다.',
    description: '성문을 통과하면 안뜰에서 정면의 적 무리와 맞붙습니다. 중앙 조형물 앞에서 붉은 카펫이 두 갈래로 나뉩니다. 어느 쪽을 따라가도 본성으로 오르는 계단에 닿습니다.',
    video: { src: '/videos/project-l-battle.mp4', poster: '/videos/project-l-battle.webp' },
  },
  {
    section: '팔각 로비 · 두 개의 열쇠',
    headline: '양쪽 방을 돌아, 처음 마주친 문을 엽니다.',
    description: '로비에 들어서면 정면 문에 열쇠를 꽂을 자리 두 개가 보입니다. 왼쪽 방에서는 정예병을 쓰러뜨리고, 오른쪽 방에서는 퍼즐을 풀어 열쇠를 얻습니다. 두 열쇠를 모으면 로비로 돌아와 정면 문을 엽니다. 안뜰에서의 대규모 전투와 근위대장 결투 사이에 두 방을 탐색하는 구간을 넣어 한 번 숨을 고르게 했습니다.',
    video: { src: '/videos/project-l-dungeon.mp4', poster: '/videos/project-l-dungeon.webp' },
  },
]

const routeStops = [
  '공성탑 상륙',
  '첫 문 · A → B',
  '성문 위 엄호',
  '지상 충차 · B → C',
  '성문 돌파',
  '본성 진입',
  '팔각 로비 · 두 열쇠',
  '근위대장 결투',
  '왕좌실 · 엔딩 발코니',
]

export default function ProjectLStudies({ sectionId }: { sectionId: string }) {
  return (
    <section id={sectionId} className="section soft" aria-labelledby={`${sectionId}-title`}>
      <div className="container">
        <h2 id={`${sectionId}-title`} className="level-studies-heading">DETAILS</h2>
        <div className="level-studies-workspace">
          <LevelRouteMap
            src="/images/project-l-level-map.webp"
            alt="Project L 공성전의 실외 이동 경로 1~6번과 본성 내부 진행 순서 7~9번을 표시한 동선도"
            width={1200}
            height={989}
            stops={routeStops}
          />
          {studies.map(({ section, headline, description, video }, index) => (
            <article className="case-card" key={section}>
              <header className="level-case-header">
                <h3><span>{String(index + 1).padStart(2, '0')}</span> {section}</h3>
              </header>
              <div className="level-case-content">
                <LevelClip {...video} title={section} scrollAutoplay />
                <CaseStory slides={[{ stage: section, title: headline, sentences: [description] }]} title={section} showStepLabel={false} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
