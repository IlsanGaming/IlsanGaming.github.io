import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '전투 방식의 변화',
    title: <>유리창이 다시 깨지는 순간,<br />이번에는 플레이어에게 총이 있습니다.</>,
    sentences: [
      '처음에는 엄폐물 뒤에 숨어 좀비가 지나가기를 기다립니다. 이후 도끼를 얻고, 바닥의 전선을 따라가면서 쓰러진 군인과 군용소총이 보입니다. 총을 얻은 뒤에는 좀비를 봐도 달라진 방식으로 대응할 수 있게 했습니다.',
    ],
  },
]

export default function LaboratoryStory() {
  return <CaseStory slides={slides} title="연구소" showStepLabel={false} />
}
