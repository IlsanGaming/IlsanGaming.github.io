import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: 'FORESHADOWING', title: '추락의 위험을 먼저 보여줬습니다.',
    accent: '높은곳에서 떨어지면 → 죽는다',
    sentences: [
      <>추격전 바로 직전에 플레이어를 발견한 좀비가 <strong>떨어져 죽는 장면</strong>을 목격합니다.</>,
      <>이후 플레이어가 직접 추락하게 만들어, 앞서 목격한 사건이 자신에게 닥쳤다는 공포를 전달하고자 했습니다.</>,
    ],
    conclusion: '먼저 보여준 사건이 이후 플레이어의 경험을 이해하는 근거',
  },
]

export default function SkybridgeStory() {
  return <CaseStory slides={slides} title="스카이브릿지 · 구급차 추락" variant="lobby-story-square lobby-story-skybridge" showStepLabel={false} />
}
