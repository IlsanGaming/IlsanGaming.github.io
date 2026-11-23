import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '전투 방식의 변화',
    title: '유리창이 다시 깨지는 순간, 이번에는 플레이어에게 무기가 있습니다.',
    sentences: [
      '연구소 입구에서는 엄폐물 뒤에 숨어 변이 좀비가 지나가기를 기다립니다.\n왼쪽 벽면에서 소방도끼를 얻으면 등을 돌린 좀비에게 먼저 다가갈 수 있습니다.\n바닥의 선을 따라가면 엄폐물에 일부 가려져 있던 군인의 시체와 M4 라이플을 발견합니다.\n병원 로비에서처럼 좀비가 유리창을 깨고 들어옵니다. 이번에는 총을 들고 맞섭니다.',
    ],
  },
]

export default function LaboratoryStory() {
  return <CaseStory slides={slides} title="연구소" showStepLabel={false} />
}
