import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '새로운 탈출 목표', title: '무전으로 목적지를 알리고 발전기와 연결된 선으로 입구를 보여줍니다.',
    sentences: [
      '지휘소에서 무전기를 확인하면 지상 구조가 어렵다는 소식과 함께 연구소 옥상으로 오라는 지시를 받습니다.\n연구소에 도착해도 무너진 정문으로는 들어갈 수 없습니다.\n발전기와 연결된 선을 따라가면 안으로 들어갈 창문이 보입니다.',
    ],
  },
]

export default function HQStory() {
  return <CaseStory slides={slides} title="HQ" showStepLabel={false} />
}
