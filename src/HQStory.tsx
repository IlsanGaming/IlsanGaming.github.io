import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '새로운 탈출 목표', title: '무전은 목적지를 알려주고, 전선은 입구로 이끕니다.',
    sentences: [
      '의료 텐트에서 부상을 치료하면 연구소 옥상으로 올라오라는 무전이 옵니다. 옥상이 목적지라는 건 알지만 연구소 정문은 무너져 있습니다. 발전기에 연결된 전선을 따라가면 안으로 들어갈 수 있는 1층 창문이 보입니다.',
    ],
  },
]

export default function HQStory() {
  return <CaseStory slides={slides} title="HQ" showStepLabel={false} />
}
