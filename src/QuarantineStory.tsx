import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '좁아지는 이동 경로', title: '위협과 탈출 경로를 동시에 보여줍니다.',
    accent: '직진 차단 → 측면 차단 → 낮은 벽 발견',
    sentences: [
      '먼저 마주치는 좀비가 직진을 막고, 방향을 틀면 두 번째 좀비가 회피 경로를 막습니다. 파손된 바리케이드 틈으로도 좀비가 들어와 움직일 공간이 좁아집니다.',
    ],
    guidance: '코너를 돌 때 정면의 좀비와 측면의 낮은 벽이 같은 시야에 들어오도록 배치해, 당장 넘을 수 있는 경로를 발견하도록 했습니다.',
  },
]

export default function QuarantineStory() {
  return <CaseStory slides={slides} title="격리구역" showStepLabel={false} />
}
