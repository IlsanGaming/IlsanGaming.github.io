import { assetUrl } from './assetUrl'
import { projectInfo, projectL } from './projectData'
import './ProjectPicker.css'

const projects = [
  {
    title: projectL.title,
    description: '공성탑에서 본성까지, 세 병사를 번갈아 조작하는 3인칭 공성전입니다.\n성벽에 오르는 선봉부터 성문을 뚫는 충차까지, 한 병사가 해낸 일이 다음 병사의 길을 엽니다.',
    cover: assetUrl(projectL.cover.src),
    href: `#${projectL.entryId}`,
  },
  {
    title: projectInfo.title,
    description: '서대문 병원에서 연구소 옥상까지 탈출로를 찾는 3인칭 좀비 생존 호러\n플레이어가 일으킨 사건이 위험을 부르고, 탈출 경로를 정하는 계기가 됩니다.',
    cover: assetUrl(projectInfo.cover.src),
    href: '#play',
  },
]

export default function ProjectPicker() {
  return (
    <section id="projects" className="section project-picker" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <h2 id="projects-title">PROJECTS</h2>
        <div className="project-grid">
          {projects.map(project => (
            <article key={project.href} className="project-card">
              <img className="project-card-cover" src={project.cover} alt="" width={1280} height={720} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="button project-card-link" href={project.href} aria-label={`${project.title} 프로젝트 상세 보기`}>
                프로젝트 상세 보기 <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
