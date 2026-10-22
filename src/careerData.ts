import { projectInfo } from './projectData'

export type Education = {
  id: string
  institution: string
  major: string
  admission: string
  status?: string
  period: { start: string; end?: string } | null
  degree: string | null
  visibility: boolean
}
export type CareerEntry = {
  id: string
  title: string
  category: string
  period: { start: string; end: string; duration?: string } | null
  teamSize: number | null
  role: string[] | null
  description: string
  summaryInfo?: string
  contributions: string[]
  collaborators?: string[]
  result: string | null
  externalUrl?: string
  internalUrl?: string
  connection?: string
  visibility: boolean
}
export const education: Education[] = [
  { id: 'sangmyung-game', institution: '상명대학교', major: '게임전공', admission: '편입학', status: '졸업 예정', period: { start: '2024-03', end: '2027-02' }, degree: null, visibility: true },
]
export const skills = [
  { id: 'engine', category: '엔진 · 게임 구현', items: ['Unreal Engine 5.8', 'Blueprint'] },
  { id: 'ai', category: 'AI 작업 도구', items: ['ChatGPT', 'Codex'] },
  { id: 'integration', category: '제작 연동 환경', items: ['Blender MCP', 'Unreal MCP'] },
]
// 수상 내역이 확인되면 추가합니다. 빈 Awards 카드는 표시하지 않습니다.
export const awards: { id: string; title: string; description?: string; visibility: boolean }[] = []
export const experiences: CareerEntry[] = [
  {
    id: 'zombie-survival', title: projectInfo.title, category: '개인 프로젝트',
    period: { start: projectInfo.period.start, end: projectInfo.period.end, duration: `${projectInfo.period.weeks}주` },
    teamSize: projectInfo.teamSize, role: ['레벨 디자인', '기획'],
    description: '좀비 서바이벌 호러 레벨 디자인 · 취업용 개인 포트폴리오',
    contributions: projectInfo.contributions.map(item => item.description),
    result: null, internalUrl: '#levels', visibility: true,
  },
  {
    id: 'operation', title: 'operation', category: '캡스톤디자인', period: null, teamSize: 4,
    role: ['팀장', '레벨 디자인'], description: '1인칭 멀티플레이 좀비 슈터',
    contributions: ['레벨 디자인(블록아웃), 블루프린트 구현', '메타휴먼 제작, 배경 디자인', '시나리오, UI'],
    collaborators: ['팀원 2명: 시네마틱 제작', '팀원 1명: 멀티플레이 환경 구현'],
    connection: '이전 팀 캡스톤에서 경험한 레벨 디자인 문제는 이후 개인 프로젝트 Operation: Delta의 개선 동기가 되었습니다.',
    result: null, externalUrl: 'https://store.steampowered.com/app/4868590/operation/', visibility: true,
  },
  {
    id: 'lastguardians', title: 'LastGuardians', category: '게임소프트웨어개발 Ⅰ', period: null, teamSize: null, role: null,
    description: 'Unity 기반 모바일 종스크롤 슈팅', summaryInfo: 'Google Play 등록 경험', contributions: ['모바일 게임 제작 프로젝트'],
    result: '현재 개발자 계정 해지로 운영하지 않습니다.', visibility: true,
  },
  {
    id: 'jamsurvivor', title: 'JamSurvivor', category: '게임잼', period: null, teamSize: null, role: null,
    description: '게임잼 참가작 · 모바일 게임 제작', contributions: [], result: null, visibility: false,
  },
]


