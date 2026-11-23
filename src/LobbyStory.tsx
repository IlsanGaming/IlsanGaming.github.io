import CaseStory from './CaseStory'


const slides = [
  {
    stage: '위험과 동선 전환', title: '출구를 열려는 순간, 탈출로가 바뀝니다.',
    sentences: [
      '생존자의 구조 요청을 따라 출구에 다가가면 발전기 선과 조명이 셔터로 시선을 이끕니다. 제어반을 조작하면 셔터가 열리는 도중에 멈추고 경보가 울립니다. 2층에서 내려온 좀비가 정면을 막으면, 플레이어는 왼쪽 접수대를 넘어 직원 통로로 빠져나갑니다.',
    ],
    adjustment: '컷신을 추가한 뒤 직접 플레이해 보니 좀비가 너무 일찍 다가왔습니다. 플레이어가 다시 조작할 수 있는 시점에 좀비가 접근하도록 생성 대기 시간을 조정했습니다.',
  },
]

export default function LobbyStory() {
  return <CaseStory slides={slides} title="병원 로비" showStepLabel={false} />
}
