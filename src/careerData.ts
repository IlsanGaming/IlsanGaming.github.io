import { projectInfo, projectL } from './projectData'
import type { ProjectImage } from './projectData'

export type Education = {
  id: string
  logo: string
  institution: string
  major: string
  status?: string
  period: { start: string; end?: string } | null
  degree: string | null
  visibility: boolean
}
export type CareerEntry = {
  id: string
  title: string
  category: string
  teamSize: number | null
  role: string[] | null
  roleLabel?: string
  roleDescription?: string[][]
  engine?: string
  features?: string
  covers?: ProjectImage[]
  description: string
  contributions: string[]
  collaborators?: string[]
  result: string | null
  externalUrl?: string
  connection?: string
  visibility: boolean
}
export const education: Education[] = [
  { id: 'sangmyung-game', logo: 'sangmyung.ico', institution: '상명대학교', major: '게임전공', status: '졸업 예정', period: { start: '2024-03', end: '2027-02' }, degree: null, visibility: true },
]
export const skills = [
  {
    id: 'engine', logos: ['unrealengine.svg'], tool: 'Unreal Engine 5.8',
    details: [
      '평면도를 바탕으로 동선을 블록아웃하고, 일관된 규격으로 공간을 구성합니다.',
      'MCP를 활용해 프롭과 블루프린트를 만들고, 직접 플레이하며 동작을 확인합니다.',
      'Landscape로 지형을 만들고, PCG로 테마에 맞는 환경 요소를 배치합니다.',
    ],
  },
  {
    id: 'powerpoint', logos: ['powerpoint.svg'], tool: 'PowerPoint',
    description: '각 구간에서 플레이어가 무엇을 하고 어디로 이동하는지 도식으로 정리합니다.',
  },
  {
    id: 'paint-net', logos: ['paintnet.ico'], tool: 'Paint.NET',
    description: '평면도에 이동 경로를 그리고 주요 오브젝트의 위치를 표시합니다.',
  },
  {
    id: 'clipchamp', logos: ['clipchamp.png'], tool: 'Clipchamp',
    description: '플레이 영상을 편집해 팀원들과 공유합니다.',
  },
  {
    id: 'collaboration', logos: ['discord.svg', 'teams.svg', 'notion.svg'], tool: '협업',
    description: 'Discord와 Microsoft Teams로 소통하고, Notion에 기획 내용과 피드백을 정리합니다.',
  },
]
// 수상 내역이 확인되면 추가합니다. 빈 Awards 카드는 표시하지 않습니다.
export const awards: { id: string; title: string; description?: string; visibility: boolean }[] = []
export const operationDeltaExperience = {
  id: 'zombie-survival', title: projectInfo.title, category: '개인 프로젝트',
  teamSize: projectInfo.teamSize, roleLabel: '담당 작업', role: ['레벨 기획', '블록아웃', '시네마틱 연출(1인 개발)'],
  engine: 'Unreal Engine 5', features: '플레이어 행동에 따라 사건이 이어지고 탈출 동선이 바뀌는 3인칭 레벨',
  description: 'Operation 후속 개인 프로젝트 · 3인칭 도심 탈출 레벨',
  covers: [projectInfo.cover],
  contributions: projectInfo.contributions.map(item => item.description),
  result: null, visibility: true,
} satisfies CareerEntry

export const projectLExperience = {
  id: projectL.entryId, title: projectL.title, category: '개인 프로젝트', covers: [projectL.cover],
  teamSize: 1, roleLabel: '제작 형태', role: ['레벨 기획', '블록아웃', '시네마틱 연출(1인 개발)'],
  description: projectL.description, engine: 'Unreal Engine 5',
  features: '세 병사의 시점을 오가며 성벽을 점령하고 본성에 진입하는 3인칭 공성전',
  contributions: [], result: null, visibility: true,
} satisfies CareerEntry

export const experiences: CareerEntry[] = [
  projectLExperience,
  operationDeltaExperience,
  {
    id: 'operation', title: 'Operation', category: '캡스톤디자인', teamSize: 4,
    role: ['4인 팀의 팀장으로 레벨 블록아웃과 블루프린트 구현을 맡았습니다.'], description: '1인칭 멀티플레이 좀비 슈터',
    engine: 'Unreal Engine 5', features: '봉쇄 구역에서 협동 임무를 수행하는 1인칭 좀비 슈터',
    covers: [{ src: '/images/operation-steam-screenshot.jpg', alt: 'operation Steam 스크린샷, 긴 복도에서 좀비와 마주치는 1인칭 플레이 장면' }],
    contributions: ['레벨 디자인(블록아웃), 블루프린트 구현', '메타휴먼 제작, 배경 디자인', '시나리오, UI'],
    collaborators: ['팀원 2명: 시네마틱 제작', '팀원 1명: 멀티플레이 환경 구현'],
    connection: '이전 팀 캡스톤에서 경험한 레벨 디자인 문제는 이후 개인 프로젝트 Operation: Delta의 개선 동기가 되었습니다.',
    result: null, externalUrl: 'https://store.steampowered.com/app/4868590/operation/', visibility: true,
  },
  {
    id: 'lastguardians', title: 'LastGuardians', category: '게임소프트웨어개발 Ⅰ', teamSize: null, role: ['팀장, 기획(전반)'],
    roleDescription: [
      ['초반에는 약한 적 사이에 보상이 큰 강적을 섞어', '먼저 노리면 더 빨리 성장할 수 있게 했습니다.'],
      ['중반부터는 강적을 늘렸고', '보스전에서는 일반 적에게 없던 원형 탄막을 피하게 했습니다.'],
    ],
    engine: 'Unity', features: 'Google Play에 출시한 모바일 종스크롤 슈팅 · 현재 서비스 종료',
    description: 'Unity 기반 모바일 종스크롤 슈팅', contributions: ['모바일 게임 제작 프로젝트'],
    covers: [
      { src: '/images/lastguardians-boss-forward.jpg', alt: 'LastGuardians 보스전의 전방 발사 탄막 패턴' },
      { src: '/images/lastguardians-boss-circle.jpg', alt: 'LastGuardians 보스전의 원형 탄막 패턴' },
    ],
    result: '현재 개발자 계정 해지로 운영하지 않습니다.', visibility: true,
  },
  {
    id: 'jamsurvivor', title: 'JamSurvivor', category: '게임잼', teamSize: null, role: null,
    description: '게임잼 참가작 · 모바일 게임 제작', contributions: [], result: null, visibility: false,
  },
]


