import CaseStory from './CaseStory'


const slides = [
  {
    stage: '위험과 동선 전환', title: '출구를 열려는 순간, 탈출로가 바뀝니다.',
    sentences: [
      '부상자의 구조 요청을 듣고 출구에 다가가면 발전기 선과 조명이 제어반 위치를 알려줍니다.\n제어반을 조작하면 셔터가 다 열리기 전에 멈추고 알람이 울립니다.\n알람을 들은 좀비들이 2층 유리창을 깨고 뛰어내려 정면을 막습니다.\n플레이어는 왼쪽 접수대를 넘어 직원 통로로 빠져나갑니다.',
    ],
    adjustment: '컷신을 넣고 직접 플레이해 보니 좀비가 너무 일찍 다가왔습니다.\n플레이어가 다시 조작할 때쯤 좀비가 접근하도록 생성 대기 시간을 늘렸습니다.',
  },
]

export default function LobbyStory() {
  return <CaseStory slides={slides} title="병원 로비" showStepLabel={false} />
}
