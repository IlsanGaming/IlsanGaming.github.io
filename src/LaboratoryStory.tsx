import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '전투 방식의 변화', title: '같은 위협에 다른 방식으로 대응합니다.',
    accent: '엄폐 → 소방도끼 → M4 라이플',
    sentences: [
      '변이 좀비를 피해 엄폐한 뒤 소방도끼를 얻어 근접 전투를 시작합니다. M4 라이플을 얻은 뒤에는 앞 구간과 마찬가지로 유리창을 깨고 접근하는 좀비에게 총기로 맞설 수 있습니다.',
    ],
    guidance: '변이 좀비가 지나간 뒤 진행 방향 왼쪽 벽에서 소방도끼를 발견하게 했습니다. 바닥의 선을 따라가면 엄폐물에 일부 가려진 군인과 M4 라이플이 드러납니다.',
  },
]

export default function LaboratoryStory() {
  return <CaseStory slides={slides} title="연구소" showStepLabel={false} />
}
