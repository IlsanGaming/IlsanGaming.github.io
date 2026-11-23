import { assetUrl } from './assetUrl'
import { projectInfo, projectL } from './projectData'
import './ProjectPicker.css'

const projects = [
  {
    title: projectL.title,
    description: '세 병사의 시점을 오가며 성벽을 넘고 성문을 여는 3인칭 공성전.',
    cover: assetUrl(projectL.cover.src),
    href: `#${projectL.entryId}`,
  },
  {
    title: projectInfo.title,
    description: '좀비로 출구가 막힌 병원에서 단서를 따라 탈출로를 찾는 3인칭 생존 호러.',
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
