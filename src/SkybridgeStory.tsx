import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: 'FORESHADOWING', title: '끊어진 다리 끝이 뛰면 닿을 만큼 가까워 보입니다.',
    sentences: [
      '병원 최상층에서 유리창 너머로 좀비가 추락하는 모습을 보여줬습니다.\n추격을 피해 나온 플레이어에게는 다리 맞은편의 계단과 비상계단 표지판이 보입니다.\n플레이어가 매달린 다리 끝이 무너지면서 구급차 위로 추락해 심한 부상을 입습니다.',
    ],
  },
]

export default function SkybridgeStory() {
  return <CaseStory slides={slides} title="스카이브릿지 · 구급차 추락" showStepLabel={false} />
}
