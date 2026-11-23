export type ProjectImage = { src: string; alt: string }

export const projectL = {
  title: 'Project L',
  entryId: 'project-l',
  cover: { src: '/images/project-l-cover.png', alt: 'Project L 성벽 돌파 표지와 공성전 레벨의 성벽 전경' },
  description: '로스트아크 ‘영광의 벽’에서 영감을 받은 3인칭 공성전 레벨입니다.',
  heroVideo: { src: '/videos/project-l-highlight.mp4', poster: '/videos/project-l-highlight.webp' },
  videoUrl: 'https://youtu.be/WX_gl6qEkw0',
  document: '/documents/project-l-design.pdf',
}

export type LevelStudy = {
  title: string; label: string; focus: string; routeLocation: string
  image?: ProjectImage; video?: string; poster?: string
  detailLayout?: 'lobby-sheet' | 'skybridge-story' | 'quarantine-story' | 'laboratory-story' | 'hq-story'
}
// 실제 스크린샷 확보 후 image: { src: '/images/파일명.webp', alt: '장면 설명' } 추가.
export const cases: LevelStudy[] = [
  {
    title: '병원 로비', video: '/videos/lobby.mp4', poster: '/videos/lobby.webp', label: '01', routeLocation: '1번 병원 로비 → 2번 직원 통로',
    focus: '제어반 · 2층 유리창 · 직원 통로',
    detailLayout: 'lobby-sheet',
  },
  {
    title: '스카이브릿지 · 구급차 추락', label: '02', routeLocation: '3번 최상층 → 4번 병원 앞', video: '/videos/skybridge.mp4', poster: '/videos/skybridge.webp',
    detailLayout: 'skybridge-story',
    focus: '앞서 목격한 추락을 플레이어가 직접 겪는 구간',
  },
  {
    title: '격리구역', label: '03', routeLocation: '5번 격리구역', video: '/videos/quarantine.mp4', poster: '/videos/quarantine-poster.webp',
    detailLayout: 'quarantine-story', focus: '갈 수 있는 길을 하나씩 지우는 공간',
  },
  {
    title: 'HQ', label: '04', routeLocation: '6번 HQ', video: '/videos/hq.mp4', poster: '/videos/hq.webp',
    detailLayout: 'hq-story', focus: '부상을 치료하고 새로운 탈출 목표를 얻는 공간',
  },
  {
    title: '연구소', label: '05', routeLocation: '7번 연구소 1층', video: '/videos/laboratory.mp4', poster: '/videos/laboratory.webp',
    detailLayout: 'laboratory-story', focus: '도망치던 플레이어가 맞서 싸우기 시작하는 공간',
  },
]
// 같은 장면의 초기/최종 이미지를 한 항목에서 연결합니다.
export const comparison: { title: string; before?: ProjectImage; after?: ProjectImage } = {
  title: '초기 그레이박싱에서 최종 레벨까지',
}
export const heroImage: ProjectImage | undefined = undefined




export const projectInfo = {
  title: 'Operation: Delta',
  cover: { src: '/images/operation-delta-cover.png', alt: 'Operation: Delta 도심 탈출 표지, 건물 옥상 헬기장에 착륙한 헬리콥터' },
  heroVideo: { src: '/videos/operation-delta-highlight.mp4', poster: '/videos/operation-delta-highlight.webp' },
  document: '/documents/Operation_Delta_Level_Design_Portfolio.pdf',
  engine: 'Unreal Engine 5.8',
  period: { start: '2026-09-21', end: '2026-10-19', weeks: 4 },
  teamSize: 1,
  contributions: [
    { title: '직접 결정한 기획', description: '전체 레벨 동선·공간 배치·스토리·이벤트 순서·컷신 기획을 직접 결정했습니다.' },
    { title: 'AI에 맡긴 구현', description: '구현 조건과 작업 순서를 제시하고, AI에 프롭과 블루프린트 구현을 맡겼습니다.' },
    { title: '직접 검토한 결과', description: '구현 결과를 직접 검토하고 수정 방향을 결정했습니다.' },
  ],
}


