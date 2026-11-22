import CaseStory from './CaseStory'


const slides = [
  {
    stage: '위험과 동선 전환', title: '셔터를 열려는 행동이 탈출 경로를 바꿉니다.',
    accent: '제어반 조작 → 알람 → 좀비 접근 → 우회',
    sentences: [
      '셔터는 통과할 수 없는 높이에서 멈추고, 알람에 반응한 좀비가 2층 유리창을 깨고 뛰어내립니다. 출구와 정면이 막히면서 플레이어는 왼쪽 접수대를 거쳐 직원 통로로 우회합니다.',
    ],
    guidance: '출구 앞 부상자의 구조 요청으로 접근할 이유를 만들고, 발전기 선과 조명으로 제어반 위치를 알렸습니다.',
    adjustment: '컷신을 추가한 뒤 직접 플레이해 보니 좀비가 의도보다 일찍 등장했습니다. 컷신이 끝날 무렵 좀비가 접근하도록 생성 대기 시간을 조정해, 조작이 돌아오는 순간 플레이어가 위협을 보고 다음 이동 방향을 판단할 수 있게 했습니다.',
  },
]

export default function LobbyStory() {
  return <CaseStory slides={slides} title="병원 로비" showStepLabel={false} />
}
