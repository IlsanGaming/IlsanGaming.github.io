import type { ReactNode } from 'react'
import CaseStory from './CaseStory'
import LevelClip from './LevelClip'
import LevelRouteMap from './LevelRouteMap'
import { assetUrl } from './assetUrl'
import './LevelStudies.css'

type Study = {
  routeLocation: string
  section: string
  headline: ReactNode
  description: string
  video: { src: string; poster: string }
  diagram?: { src: string; alt: string; caption: string }
}

const studies: Study[] = [
  {
    section: '공성탑 · 성벽 상륙',
    routeLocation: '1번 공성탑 상륙 · 6번 본성 진입',
    headline: '공성탑에서 본 본성의 첨탑이 안뜰에서 다시 보입니다.',
    description: '공성탑 위에서는 성벽 너머로 본성의 첨탑이 보입니다.\n성벽에 오른 뒤에도 방향을 바꿀 때마다 첨탑을 확인할 수 있게 배치했습니다.\n성문을 지나면 붉은 카펫 끝에 같은 첨탑이 보입니다.',
    video: { src: '/videos/project-l-landmark.mp4', poster: '/videos/project-l-landmark.webp' },
  },
  {
    section: '성벽 붕괴 · 두 번째 포대',
    routeLocation: '1번 공성탑 상륙과 2번 첫 문 사이',
    headline: '정면 계단에는 궁수를 두고 측면 사다리까지는 횃불을 놓았습니다.',
    description: '성벽이 무너져 상단 보행로가 끊기면 왼쪽 계단으로 내려갑니다.\n아래에서 포대로 곧장 오르려면 궁수의 사격을 받으며 정면 계단을 올라야 합니다.\n낮은 통로에서는 횃불을 따라가다 포대 옆으로 오르는 사다리를 발견합니다.',
    video: { src: '/videos/project-l-ladder.mp4', poster: '/videos/project-l-ladder.webp' },
  },
  {
    section: '첫 문 · 시점 전환',
    routeLocation: '2번 첫 문',
    headline: 'A가 열어 달라고 외친 문을 B가 반대편에서 엽니다.',
    description: '잠긴 문 앞에서 A의 어깨 너머로 한 단 아래의 B분대가 보입니다.\nA가 문을 열어 달라고 외치면 조작이 B로 넘어갑니다.\nB는 건너편 계단을 올라 문루 안쪽의 개폐 장치를 돌립니다.',
    video: { src: '/videos/project-l-switch.mp4', poster: '/videos/project-l-switch.webp' },
  },
  {
    section: '성문 위 교전 · 충차 엄호',
    diagram: {
      src: '/images/project-l-archer-placement.webp',
      alt: '성문 옆 두 궁수조의 기존 위치와 성벽 양 끝으로 옮긴 위치를 화살표로 표시한 도식',
      caption: '궁수 배치 전후',
    },
    routeLocation: '3번 성문 위 엄호 → 5번 성문 돌파',
    headline: '성벽 한쪽을 확보했는데 충차는 왜 아직 멈춰 있을까요?',
    description: '처음에는 궁수들이 성문 옆에 모여 있었습니다. 이들을 성벽 양 끝으로 나눠 배치했습니다.\nB가 가까운 쪽을 정리하고 나면 건너편에서 날아오는 화살이 눈에 들어옵니다.\n그쪽까지 건너가야 아래에서 기다리던 C가 충차를 밀 수 있습니다.',
    video: { src: '/videos/project-l-ram-guard.mp4', poster: '/images/project-l-ram-guard.webp' },
  },
  {
    section: '안뜰 · 본성 진입',
    routeLocation: '5번 성문 돌파 → 6번 본성 진입',
    headline: <><span className="headline-phrase">붉은 카펫은 두 갈래로 나뉘지만</span>{' '}<span className="headline-phrase">어느 쪽을 따라가도 <span className="headline-phrase">본성 계단에 닿습니다.</span></span></>,
    description: '성문 안쪽의 좁은 통로를 벗어나면 안뜰 너머로 본성의 첨탑이 보입니다.\n안뜰 중앙에는 조형물을 두고 붉은 카펫을 그 양옆으로 꺾었습니다.\n어느 쪽을 택해도 카펫이 계단 입구까지 이어져 본성으로 오를 길을 찾을 수 있습니다.',
    video: { src: '/videos/project-l-battle.mp4', poster: '/videos/project-l-battle.webp' },
  },
  {
    section: '팔각 로비 · 두 개의 열쇠',
    routeLocation: '7번 팔각 로비',
    headline: '양쪽 방을 돌아 처음 마주친 문을 엽니다.',
    description: '잠긴 정면 문의 열쇠 자리 두 개를 먼저 보여줘 양옆 방을 살펴볼 이유를 만들었습니다.\n힘의 방에서는 정예병을 쓰러뜨리고 지혜의 방에서는 거울을 돌려 빛을 태양 문장에 연결합니다.\n어느 방에서든 열쇠를 얻고 나오면 처음 문을 봤던 로비로 돌아옵니다.\n안뜰의 대규모 전투 뒤에는 두 방을 탐색하며 한숨 돌리고 근위대장과 결투를 치르도록 했습니다.',
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
          {studies.map(({ routeLocation, section, headline, description, video, diagram }, index) => (
            <article className="case-card" key={section}>
              <header className="level-case-header">
                <h3><span>{String(index + 1).padStart(2, '0')}</span> {section}</h3>
                <p>동선도 · {routeLocation}</p>
              </header>
              <div className="level-case-content">
                <LevelClip {...video} title={section} scrollAutoplay />
                <CaseStory slides={[{ stage: section, title: headline, sentences: [description] }]} title={section} showStepLabel={false} />
              </div>
              {diagram && (
                <figure className="archer-placement">
                  <figcaption>{diagram.caption}</figcaption>
                  <img src={assetUrl(diagram.src)} width="1440" height="322" alt={diagram.alt} loading="lazy" />
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
