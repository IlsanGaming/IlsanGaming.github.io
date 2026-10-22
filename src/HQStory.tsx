import CaseStory from './CaseStory'
import type { StorySlide } from './CaseStory'

const slides: StorySlide[] = [
  {
    stage: '부상 치료', title: '추락으로 입은 부상을 이곳에서 치료합니다.',
    accent: '추락 부상 → 의료 텐트 → 회복',
    sentences: [
      '다리에서 추락한 이후 플레이어는 달릴 수 없는 상태였습니다.',
      '의료 텐트에서 부상을 치료하며 앞선 사건의 결과를 회복합니다.',
    ],
  },
  {
    stage: '미리 보여준 건물', title: '정체 모를 건물은 이미 한 번 보여줬습니다.',
    accent: '추락 장면 → HQ',
    sentences: [
      '구급차 추락 장면에서 처음 보였던 특이한 건물이 다시 나타납니다.',
      '주변 건물과 다른 외형으로 구분되지만, 처음부터 용도를 직접 알려주지 않습니다.',
    ],
  },
  {
    stage: '연구동의 정체', title: '보고서 한 줄이 건물의 정체를 암시합니다.',
    accent: '격리구역 인접 연구동 · 변이 좀비(보스)',
    sentences: [
      '보고서에는 연구소에 변이 좀비(보스)가 나타나 폐쇄 중이라는 정보가 있습니다.',
      "'격리구역 인접 연구동'이라는 문구는 앞서 보았던 특이한 건물을 연상하게 됩니다.",
    ],
  },
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
