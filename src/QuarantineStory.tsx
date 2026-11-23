import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '좁아지는 이동 경로', title: '경로를 막는 좀비가 우회로를 알려줍니다.',
    sentences: [
      '좀비를 피해 방향을 틀면 다른 좀비가 그 길을 막습니다. 부서진 틈으로도 계속 좀비가 들어옵니다. 마지막 코너에서는 정면의 좀비와 옆의 낮은 벽이 한눈에 들어오게 배치했습니다. 어느 쪽이 위험한지 알아차리는 순간, 빠져나갈 길도 보입니다.',
    ],
  },
]

export default function QuarantineStory() {
  return <CaseStory slides={slides} title="격리구역" showStepLabel={false} />
}
