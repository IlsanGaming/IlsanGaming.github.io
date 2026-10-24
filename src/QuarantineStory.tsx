import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '좁아지는 이동 경로', title: '플레이어를 계속 몰아붙입니다.',
    accent: '벌어진 틈 · 가까워진 위협',
    sentences: [
      '구급차가 들이받아 벌어진 틈으로 좀비가 진입해 있습니다.',
      '부상으로 도망칠수 없는 플레이어는 마지막 선택만이 남았습니다.',
    ],
  },
]

export default function QuarantineStory() {
  return <CaseStory slides={slides} title="격리구역" variant="lobby-story-square lobby-story-quarantine" showStepLabel={false} />
}
