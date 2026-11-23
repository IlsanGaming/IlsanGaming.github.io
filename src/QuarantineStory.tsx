import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '좁아지는 이동 경로', title: '경로를 막는 좀비가 우회로를 알려줍니다.',
    sentences: [
      '뒤에서는 좀비가 쫓아오고 구급차가 들이받은 바리케이드 틈으로도 좀비가 들어옵니다.\n마지막 코너에는 정면의 좀비와 측면의 낮은 벽을 한눈에 보이게 배치했습니다.\n앞으로 갈 수 없다는 걸 알아차릴 때 뛰어넘을 벽도 발견할 수 있습니다.',
    ],
  },
]

export default function QuarantineStory() {
  return <CaseStory slides={slides} title="격리구역" showStepLabel={false} />
}
