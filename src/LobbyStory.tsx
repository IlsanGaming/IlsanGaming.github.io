import CaseStory from './CaseStory'


const slides = [
  {
    stage: '공간의 목적', title: '죽을 고비를 넘긴 플레이어는 출구부터 찾습니다.',
    accent: '탈출에 대한 기대',
    sentences: [<>비상계단을 빠져나온 플레이어에게 출구 앞 부상자의 구조 요청을 들려줍니다.</>, <><strong>생존자를 돕는 행동</strong>과 병원에서 탈출하려는 목표를 연결했습니다.</>],
    conclusion: '로비는 단순한 전투 공간이 아니라 다음 사건의 출발점입니다.',
  },
  {
    stage: '생존자 배치', title: '문은 많지만, 어디가 출구인지 명확하지 않습니다.',
    accent: '출구 앞 생존자 배치',
    sentences: [<>셔터로 닫혀있는 문 하나만으로는 <strong>탈출 경로</strong>를 충분히 알리기 어렵습니다.</>, <>부상자의 구조 요청으로 플레이어가 셔터에 접근할 이유를 만들었습니다.</>],
    conclusion: '구조 요청 → 출구 접근',
  },
  {
    stage: '제어반 시선 유도', title: '제어반을 찾도록한 시각적 단서',
    accent: '조명 + 연결된 선',
    sentences: [<>제어반 주변의 <strong>깜빡이는 조명</strong>으로 주의를 끌고,<br />제어반과 비상발전기에 연결된 선으로 시선을 유도했습니다.</>],
    conclusion: '셔터 접근 → 제어반 탐색 → 조작',
  },
  {
    stage: '셔터 고장', title: '문은 열리지만, 탈출할 수 없습니다.', numeric: false,
    accent: '85cm 미만',
    sentences: [<>85cm는 포복 통과 기준 높이입니다.</>, <>플레이어가 통과하려면 최소 <strong>85cm의 높이</strong>가 필요합니다.</>, <>셔터는 이보다 낮게 멈추고, 금속 파손음으로 고장을 알립니다.</>],
    conclusion: '탈출에 대한 기대 → 출구 개방 실패',
  },
  {
    stage: '위험과 동선 전환', title: '플레이어가 직접 다음 위험을 불러왔습니다.',
    accent: '셔터 → 알람 → 좀비',
    sentences: [<>셔터 작동으로 알람이 울리고,<br />이에 반응한 좀비들이 <strong>2층 유리창</strong>을 깨고 뛰어내립니다.</>, <>플레이어는 유일하게 열린 반대편 직원 통로로 우회하도록 설계했습니다.</>],
    conclusion: '플레이어의 행동이 다음 사건의 원인이 됩니다.',
  },
]

export default function LobbyStory() {
  return <CaseStory slides={slides} title="병원 로비" showStepLabel={false} variant="lobby-story-square" />
}
