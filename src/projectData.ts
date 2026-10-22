export type ProjectImage = { src: string; alt: string }
export type LevelStudy = {
  title: string; label: string; focus: string; steps: string[]
  image?: ProjectImage; video?: string; poster?: string; wide?: boolean
  detailLayout?: 'lobby-sheet' | 'skybridge-story' | 'quarantine-story' | 'laboratory-story' | 'hq-story'
}
// 실제 스크린샷 확보 후 image: { src: '/images/파일명.webp', alt: '장면 설명' } 추가.
export const cases: LevelStudy[] = [
  {
    title: '병원 로비', video: '/videos/lobby.mp4', label: '01',
    focus: '플레이어의 행동이 새로운 위험을 만드는 공간',
    steps: ['비상계단 진입', '생존자 구조 요청', '셔터 접근', '제어반 조작', '셔터 고장', '방범 알람', '2층 좀비 추락', '직원 통로 우회'],
    detailLayout: 'lobby-sheet',
  },
  {
    title: '스카이브릿지 · 구급차 추락', label: '02', video: '/videos/skybridge.mp4', detailLayout: 'skybridge-story',
    focus: '제한된 선택과 시간 속에서 내린 판단이 예상치 못한 결과로 이어지는 공간',
    steps: ['최상층 진입', '좀비 추락사', '추격전 시작', '외부 이동', '다리 발견', '카페 좀비 등장', '매달리기', '다리 붕괴', '구급차 추락', '왼쪽으로 낙하', '바리케이드 충돌', '부상'],
  },
  {
    title: '격리구역', label: '03', video: '/videos/quarantine.mp4', poster: '/videos/quarantine-poster.webp',
    detailLayout: 'quarantine-story', focus: '갈 수 있는 길을 하나씩 지우는 공간',
    steps: ['부상 상태로 기상', '병원 출구 발견', '첫 번째 좀비로 직진 차단', '두 번째 좀비로 회피 경로 차단', '격리구역 우회', '2m 바리케이드 붕괴', '4m 바리케이드의 파손된 틈', '벽을 따라 이동', '코너에서 좀비와 조우', '낮은 벽 넘기'],
  },
  {
    title: '연구소', label: '04', video: '/videos/laboratory.mp4', poster: '/videos/laboratory.webp',
    detailLayout: 'laboratory-story', focus: '도망치던 플레이어가 맞서 싸우기 시작하는 공간',
    steps: ['연구소 1층 창문 개방', '변이 좀비 목격', '엄폐', '소방도끼 획득', '스텔스 킬', '일반 좀비 정면 전투', '군인 시체 발견', 'M4 획득', '변이 좀비 전투', '탄약 보충', '유리창 좀비 등장', '옥상 전투', '헬리콥터 탈출'],
  },
  { title: 'HQ', label: '05', detailLayout: 'hq-story', video: '/videos/hq.mp4', poster: '/videos/hq.webp', focus: '부상을 치료하고 새로운 탈출 목표를 얻는 공간', steps: ['낮은 벽 넘기', 'HQ 진입', '의료 텐트 치료', '지휘소 탐색', '변이 좀비 보고서 확인', '무전기 확인', '옥상 탈출 목표 획득'] },
]
// 같은 장면의 초기/최종 이미지를 한 항목에서 연결합니다.
export const comparison: { title: string; before?: ProjectImage; after?: ProjectImage } = {
  title: '초기 그레이박싱에서 최종 레벨까지',
}
export const heroImage: ProjectImage | undefined = undefined




export const projectInfo = {
  title: 'Operation: Delta',
  period: { start: '2026-09-21', end: '2026-10-19', weeks: 4 },
  teamSize: 1,
  contributions: [
    { title: '직접 결정한 기획', description: '전체 레벨 동선·공간 배치·스토리·이벤트 순서·컷신 기획을 직접 결정했습니다.' },
    { title: 'AI에 맡긴 구현', description: '구현 조건과 작업 순서를 제시하고, AI에 프롭과 블루프린트 구현을 맡겼습니다.' },
    { title: '직접 검토한 결과', description: '구현 결과를 직접 검토하고 수정 방향을 결정했습니다.' },
  ],
}


