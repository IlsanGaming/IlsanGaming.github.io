import { assetUrl } from './assetUrl'
import { projectInfo, projectL } from './projectData'
import './ProjectPicker.css'

const projects = [
  {
    title: projectL.title,
    description: '세 병사의 시점을 잇는 공성전.\n성벽 양 끝의 궁수를 제압해야 다음 병사가 충차를 밉니다.',
    cover: assetUrl(projectL.cover.src),
    href: `#${projectL.entryId}`,
  },
  {
    title: projectInfo.title,
    description: '병원을 탈출하는 생존 호러.\n셔터를 열려다 좀비를 불러 다른 탈출로를 찾아야 합니다.',
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
