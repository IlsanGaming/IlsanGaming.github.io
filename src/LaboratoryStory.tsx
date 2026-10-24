import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '첫 번째 무기', title: '도끼 하나로 플레이어의 입장이 바뀝니다.',
    accent: '도망·엄폐 → 첫 무기 획득',
    sentences: [
      '목표는 연구소 옥상에 도달하는 것입니다.',
      '진행 과정에서 도끼를 발견하면서, 이제 도망치지 않고 직접 맞설 수 있게 됩니다.',
      '하지만 거대한 보스를 상대하기에는 부족합니다.',
    ],
  },
]

export default function LaboratoryStory() {
  return <CaseStory slides={slides} title="연구소" variant="lobby-story-square lobby-story-laboratory" showStepLabel={false} />
}
