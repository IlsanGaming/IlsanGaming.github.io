import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '새로운 탈출 목표', title: '무전으로 연구소 옥상을 다음 목표로 제시합니다.',
    accent: '부상 치료 → 무전 확인 → 연구소 진입',
    sentences: [
      '의료 텐트에서 부상을 치료한 뒤, 무전을 통해 지상 구조가 어렵다는 상황과 연구소 옥상으로 가야 한다는 목표를 전달합니다.',
    ],
    guidance: '연구소 정문은 무너져 있고, 발전기에 연결된 선을 따라가면 진입할 수 있는 1층 창문을 발견합니다.',
  },
]

export default function HQStory() {
  return <CaseStory slides={slides} title="HQ" showStepLabel={false} />
}
