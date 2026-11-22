import { useState } from 'react'
import { assetUrl } from './assetUrl'
import { projectInfo, projectL } from './projectData'
import './ProjectPicker.css'

const projects = [
  {
    title: projectL.title,
    description: projectL.description,
    cover: assetUrl(projectL.cover.src),
    href: `#${projectL.entryId}`,
  },
  {
    title: projectInfo.title,
    description: '플레이어의 행동이 다음 사건으로 이어지는 좀비 서바이벌 레벨 디자인.',
    cover: assetUrl(projectInfo.cover.src),
    href: '#play',
  },
]

export default function ProjectPicker() {
  const [selected, setSelected] = useState(0)
  const current = projects[selected]
  const lastIndex = projects.length - 1

  return (
    <section id="projects" className="section project-picker" aria-labelledby="projects-title" data-position={selected} tabIndex={-1}>
      <div className="container">
        <h2 id="projects-title">PROJECTS</h2>
        <div className="project-stage-viewport">
          <div className="project-stage-panels" role="group" aria-label="프로젝트 선택">
            {projects.map((project, index) => (
              <button key={project.title} className="project-stage-panel" type="button"
                aria-pressed={selected === index} onClick={() => setSelected(index)}>
                <span className="project-stage-cover" aria-hidden="true">
                  <img src={project.cover} alt="" loading="lazy" />
                </span>
                <span className="project-stage-label">{project.title}</span>
              </button>
            ))}
          </div>
          <div className="project-stage-arrows" role="group" aria-label="프로젝트 이동">
            <button className="project-stage-arrow project-stage-prev" type="button" aria-label="이전 프로젝트"
              aria-disabled={selected === 0} onClick={() => setSelected(index => Math.max(0, index - 1))}>←</button>
            <button className="project-stage-arrow project-stage-next" type="button" aria-label="다음 프로젝트"
              aria-disabled={selected === lastIndex} onClick={() => setSelected(index => Math.min(lastIndex, index + 1))}>→</button>
          </div>
        </div>
        <div className="project-stage-controls">
          <div className="project-stage-current" aria-live="polite" aria-atomic="true">
            {projects.map((project, index) => (
              <div key={project.title} className="project-stage-summary" aria-hidden={index !== selected}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <a className="button project-stage-open" href={current.href}>프로젝트 상세 보기 <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
