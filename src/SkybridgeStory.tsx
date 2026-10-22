import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: 'SCENE DESIGN', title: '플레이어가 판단할 시간도 줄였습니다.',
    accent: '이동 경로 제한 + 추격전',
    sentences: [
      <>최상층에서 길이 막힌 플레이어는 외부로 향합니다.</>,
      <>다리를 건너면 탈출할수 있을 것처럼 보였습니다.</>,
    ],
    conclusion: '어디로 이동할 것인가뿐 아니라 얼마나 판단할 수 있는가까지 설계한 구간.',
  },
  {
    stage: 'DESIGN DECISION', title: '더 이상 고민할 시간이 없습니다.',
    accent: '경로탐색 → 판단 시간 감소',
    sentences: [
      <>단순히 뒤에서만 쫓아온다면, 플레이어는 <strong>여러 방향을 탐색할 여유</strong>가 있습니다.</>,
      <>하지만 앞뒤로 적이 나타난다면 더 이상 고민할 시간은 없어집니다.</>,
    ],
    conclusion: '적의 수를 단순히 늘리는 것이 아니라, 선택에 사용할 시간을 제한하는 배치.',
  },
  {
    stage: 'VISUAL GUIDANCE', title: '저 다리를 잡으면 살 수 있을 것 같습니다.',
    accent: '스카이브릿지 + 초록색 비상구 표지판',
    sentences: [
      <>맞은편 건물의 <strong>초록색 비상구 표지판</strong>으로 탈출 가능성을 전달했습니다.</>,
      <>부서진 다리 끝은 충분히 붙잡을수 있어 보이도록 설계했습니다.</>,
    ],
  },
  {
    stage: 'FORESHADOWING', title: '추락의 위험을 먼저 보여줬습니다.',
    accent: '높은곳에서 떨어지면 → 죽는다',
    sentences: [
      <>추격전 바로 직전에 플레이어를 발견한 좀비가 <strong>떨어져 죽는 장면</strong>을 목격합니다.</>,
      <>이후 플레이어가 직접 추락하게 만들어, 앞서 목격한 사건이 자신에게 닥쳤다는 공포를 전달하고자 했습니다.</>,
    ],
    conclusion: '먼저 보여준 사건이 이후 플레이어의 경험을 이해하는 근거',
  },
  {
    stage: 'CAUSE & EFFECT', title: '살아남았지만, 멀쩡할 수는 없습니다.',
    accent: '구급차 → 충격 흡수 → 바리케이드 충돌 → 부상',
    sentences: [
      <>높은 곳에서 추락한 플레이어는 <strong>구급차 위로 떨어지게</strong> 됩니다.</>,
      <>이후 왼쪽으로 굴러 떨어져 바리케이드와 충돌하며 심한 부상을 입습니다.</>,
      <>마지막 충돌은 <strong>슬로우 모션</strong>으로 연출해 충격을 강조했습니다.</>,
    ],
    conclusion: '구급차는 생존의 이유, 바리케이드는 부상의 이유를 제공합니다.',
  },
]

export default function SkybridgeStory() {
  return <CaseStory slides={slides} title="스카이브릿지 · 구급차 추락" variant="lobby-story-square lobby-story-skybridge" showStepLabel={false} />
}
