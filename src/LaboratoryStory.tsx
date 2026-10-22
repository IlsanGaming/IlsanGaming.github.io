import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '위협의 예고', title: '한숨 돌리고 상황을 지켜봅니다.',
    accent: '변이 좀비 목격 → 엄폐',
    sentences: [
      '연구소로 진입한 플레이어는, 눈앞을 지나가는 거대한 보스를 발견합니다.',
      '일반 좀비와 확연히 다른 외형으로 위험을 전달하고, 플레이어가 앞에 놓인 엄폐물에 몸을 숨기도록 의도했습니다.',
    ],
  },
  {
    stage: '첫 번째 무기', title: '도끼 하나로 플레이어의 입장이 바뀝니다.',
    accent: '도망·엄폐 → 첫 무기 획득',
    sentences: [
      '목표는 연구소 옥상에 도달하는 것입니다.',
      '진행 과정에서 도끼를 발견하면서, 이제 도망치지 않고 직접 맞설 수 있게 됩니다.',
      '하지만 거대한 보스를 상대하기에는 부족합니다.',
    ],
  },
  {
    stage: '전투의 위험', title: '도끼는 강력하지만 아직 부족합니다.',
    accent: '스텔스 킬 → 발각 → 정면 전투',
    sentences: [
      '코너를 돌면 좀비가 나타납니다. 플레이어는 조용히 다가가 은밀하게 처치합니다.',
      '그 장면을 본 좀비가 달려오면서 전투가 시작됩니다.',
      '도끼로 전투를 경험하며, 더 효과적인 무기의 필요성을 느끼게 됩니다.',
    ],
  },
  {
    stage: '전투 수단의 강화', title: '다시한번 입장이 바뀝니다.',
    accent: 'M4 소총 획득',
    sentences: [
      '도끼로 좀비를 상대하던 플레이어는 M4 소총을 획득합니다.',
      '소방도끼로는 부족했던 보스에게 이제는 맞서 싸울준비가 되었습니다.',
    ],
  },
  {
    stage: '달라진 플레이어', title: '똑같이 등장하지만, 이제 도망치지 않습니다.',
    accent: '탄약 보충 → 좀비 전투 → 옥상 탈출',
    sentences: [
      '좀비가 유리를 깨고 등장하지만, 이전과 달리 총으로 맞서 싸울 수 있습니다.',
      '같은 위협을 마주해도 플레이어의 행동이 달라졌다는 점을 보여주고자 했습니다.',
    ],
  },
]

export default function LaboratoryStory() {
  return <CaseStory slides={slides} title="연구소" variant="lobby-story-square lobby-story-laboratory" showStepLabel={false} />
}
