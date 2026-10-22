import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '출구로 유도', title: '출구는 보였지만, 갈 수 없었습니다.',
    accent: '병원 출구 → 경로 차단',
    sentences: [
      '정신을 차려보니 출구먼저 보였습니다.',
      '부상을 당했지만, 출구로 향하도록 첫 이동 목표를 제시했습니다.',
    ],
  },
  {
    stage: '우회 경로', title: '갈수 있는길은 하나뿐입니다.',
    accent: '봉쇄된 도로 → 격리구역',
    sentences: [
      '주변은 바리케이트로 봉쇄되어 있습니다.',
      '좀비에게 경로를 차단당한 플레이어는 유일하게 열린 격리구역으로 우회합니다.',
    ],
  },
  {
    stage: '무너지는 방어선', title: '안전한 공간은 없습니다.',
    accent: '바리케이드 붕괴',
    sentences: [
      '플레이어는 좀비가 바리케이드를 넘어뜨리는 장면을 직접 목격합니다.',
      '당장 가까운 위협은 아니지만, 격리구역도 안전하지 않다는 사실을 보여줍니다.',
    ],
  },
  {
    stage: '좁아지는 이동 경로', title: '플레이어를 계속 몰아붙입니다.',
    accent: '벌어진 틈 · 가까워진 위협',
    sentences: [
      '구급차가 들이받아 벌어진 틈으로 좀비가 진입해 있습니다.',
      '부상으로 도망칠수 없는 플레이어는 마지막 선택만이 남았습니다.',
    ],
  },
  {
    stage: '마지막 선택', title: '절체절명의 순간, 마지막 선택.',
    accent: '낮은 벽 → 마지막 탈출',
    sentences: [
      '코너에서 좀비와 마주치는 순간, 더이상 도망칠곳은 없습니다.',
      '죽을힘을 다해 벽을 뛰어넘습니다.',
    ],
  },
]

export default function QuarantineStory() {
  return <CaseStory slides={slides} title="격리구역" variant="lobby-story-square lobby-story-quarantine" showStepLabel={false} />
}
