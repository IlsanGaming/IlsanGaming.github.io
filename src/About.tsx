import { useState } from 'react'
import { awards, education, experiences, skills } from './careerData'
import './About.css'

const formatDate = (date: string) => date.replaceAll('-', '.')

export default function About() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const visibleAwards = awards.filter(item => item.visibility)
  return <section id="about" className="section about-career">
    <div className="container">
      <p className="eyebrow">ABOUT ME</p>
      <div className="about-profile">
        <div className="about-profile-copy">
          <div className="about-profile-name"><h2>조강현</h2><span>Level Designer</span></div>
          <p className="about-profile-description">“왜 여기인가?”라는 질문에 실제 플레이로 답하는 레벨디자이너 조강현입니다.</p>
          <div className="about-profile-contacts">
            <span className="about-contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2" /></svg><span>2002년생(만24세)</span></span>
            <a className="about-contact" href="tel:01098664636"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 3 4 1 1 5-3 2a15 15 0 0 0 6 6l2-3 5 1 1 4c-1 3-5 3-8 1C7 17 3 12 3 7c0-2 0-3 2-4Z" /></svg><span>010-9866-4636</span></a>
            <a className="about-contact" href="mailto:whrkd34@naver.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg><span>whrkd34@naver.com</span></a>
          </div>
        </div>
      </div>
      <div className={`career-layout${expandedProject ? ' has-expanded-project' : ''}`}>
        <div className="career-sidebar">
          <section className="career-info-card" aria-labelledby="education-title"><p className="career-kicker">학력</p><h3 id="education-title">Education</h3>{education.filter(item => item.visibility).map(item => <div className="education-entry" key={item.id}><h4>{item.institution}</h4><p>{item.major}</p><p className="education-status"><span className="career-tag">{item.admission}</span>{item.status && <span className="career-tag">{item.status}</span>}</p>{item.period && <p className="career-period">{formatDate(item.period.start)}{item.period.end && ` – ${formatDate(item.period.end)}`}</p>}{item.degree && <p>{item.degree}</p>}</div>)}</section>
          <section className="career-info-card" aria-labelledby="skills-title"><p className="career-kicker">제작 도구</p><h3 id="skills-title">Skills</h3>{skills.map(group => <div className="skill-group" key={group.id}><h4>{group.category}</h4><ul className="skill-chips">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</section>
          <section className="career-info-card" aria-labelledby="military-title">
            <p className="career-kicker">병역 사항</p><h3 id="military-title">Military Service</h3>
            <div className="military-entry"><h4>수도기계화보병사단 병장 만기전역</h4><p className="career-period"><time dateTime="2021-07">2021.07</time> – <time dateTime="2023-01">2023.01</time></p></div>
            <div className="military-entry"><h4>예비역 하사 임용</h4><p className="career-period"><time dateTime="2025-09">2025.09</time></p></div>
          </section>
          {visibleAwards.length > 0 && <section className="career-info-card" aria-labelledby="awards-title"><p className="career-kicker">수상</p><h3 id="awards-title">Awards</h3>{visibleAwards.map(item => <div key={item.id}><h4>{item.title}</h4>{item.description && <p>{item.description}</p>}</div>)}</section>}
        </div>
        <section className="career-experience" aria-labelledby="experience-title"><div className="career-experience-heading"><p className="career-kicker">프로젝트 및 활동</p><h3 id="experience-title">Experience</h3></div>
          <ol className="career-timeline">{experiences.filter(item => item.visibility).map(item => <li key={item.id} className="career-timeline-item"><article className="career-work career-expandable" aria-labelledby={`work-${item.id}`}><div className="career-summary">
            <div className="career-work-meta"><span className="career-category">{item.category}</span>{item.period && <p className="career-period"><time dateTime={item.period.start}>{formatDate(item.period.start)}</time><span> ~ </span><time dateTime={item.period.end}>{formatDate(item.period.end)}</time></p>}</div>
            <h4 id={`work-${item.id}`}>{item.title}</h4><p className="career-work-description">{item.description}</p>
            <p className="career-facts">{item.id === 'zombie-survival' ? '제작기간 : 4주' : item.id === 'operation' ? '4인 팀 제작 · 팀장 / 레벨 디자인' : item.summaryInfo ?? '모바일 게임 제작 프로젝트'}</p>
            <div className="career-summary-action"><button type="button" className="career-detail-toggle" aria-expanded={expandedProject === item.id} aria-controls={`career-detail-${item.id}`} onClick={() => setExpandedProject(current => current === item.id ? null : item.id)}>{expandedProject === item.id ? 'Close' : 'Detail'} <span aria-hidden="true">{expandedProject === item.id ? '−' : '+'}</span></button></div>
            </div>
            <div className="career-detail-panel" id={`career-detail-${item.id}`} role="region" aria-labelledby={`work-${item.id}`} hidden={expandedProject !== item.id}>
            {item.id === 'lastguardians' && <p className="career-work-description">{item.summaryInfo ?? item.description}</p>}
            {item.id !== 'zombie-survival' && item.role && <p className="career-role"><span>담당</span> {item.role.join(' · ')}</p>}
            {item.contributions.length > 0 && <ul className="career-contributions">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>}
            {item.collaborators && <div className="career-collaborators"><p>팀원 담당</p><ul>{item.collaborators.map(text => <li key={text}>{text}</li>)}</ul></div>}
            {item.connection && <p className="career-connection">{item.connection}</p>}{item.result && <p className="career-result">{item.result}</p>}
            {(item.internalUrl || item.externalUrl) && <div className="career-work-links">{item.internalUrl && <a className="text-link" href={item.internalUrl}>현재 상세 포트폴리오 보기 <span aria-hidden="true">↑</span></a>}{item.externalUrl && <a className="text-link" href={item.externalUrl} target="_blank" rel="noopener noreferrer">Steam에서 보기 <span aria-hidden="true">↗</span></a>}</div>}
            </div></article></li>)}</ol>
        </section>
      </div><a className="text-link career-back" href="#home">처음으로 돌아가기 ↑</a>
    </div>
  </section>
}
