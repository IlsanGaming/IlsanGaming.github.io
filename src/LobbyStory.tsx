import CaseStory from './CaseStory'


const slides = [
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
