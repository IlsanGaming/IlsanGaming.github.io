import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: 'FORESHADOWING', title: '추락의 위험을 먼저 보여줬습니다.',
    accent: '좀비 추락 목격 → 스카이브릿지 붕괴',
    sentences: [
      '추격 직전에 좀비가 지상으로 추락하는 모습을 먼저 보여줍니다. 이후 플레이어도 다리가 무너지면서 구급차 위로 떨어지고, 부상 상태로 다음 구간을 시작합니다.',
    ],
    guidance: '맞은편 계단과 비상계단 표지판으로 다리 너머에 길이 있음을 보여주고, 부서진 다리 끝이 손으로 붙잡을 수 있는 형태로 보이도록 구성했습니다.',
  },
]

export default function SkybridgeStory() {
  return <CaseStory slides={slides} title="스카이브릿지 · 구급차 추락" showStepLabel={false} />
}
