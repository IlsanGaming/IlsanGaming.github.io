import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '새로운 탈출 목표', title: '도망치는 것에서, 목적지를 향하는 것으로.',
    accent: '무전기 → 옥상 탈출',
    sentences: [
      "무전기에서는 '불의의 사고로 인해 폐쇄 중'이라는 상황을 전달합니다.",
      '플레이어는 옥상으로 향해야 한다는 새로운 탈출 목표를 얻습니다.',
    ],
  },
]

export default function HQStory() {
  return <CaseStory slides={slides} title="HQ" variant="lobby-story-square lobby-story-hq" showStepLabel={false} />
}
