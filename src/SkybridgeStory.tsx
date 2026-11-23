import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: 'FORESHADOWING', title: '추락의 위험을 먼저 보여줬습니다.',
    sentences: [
      '추격이 시작되기 직전, 좀비가 지상으로 추락하는 모습을 먼저 보여줬습니다. 맞은편에는 출구 표지판이 보여 계속 건널 길이 있다고 예상할 수 있습니다. 하지만 다리를 건너던 중 바닥이 무너지고, 플레이어는 구급차 위로 떨어져 부상을 입습니다.',
    ],
  },
]

export default function SkybridgeStory() {
  return <CaseStory slides={slides} title="스카이브릿지 · 구급차 추락" showStepLabel={false} />
}
