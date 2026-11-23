import { awards, education, experiences, skills } from './careerData'
import { assetUrl } from './assetUrl'
import './About.css'

const formatDate = (date: string) => date.replaceAll('-', '.')

export default function About() {
  const visibleAwards = awards.filter(item => item.visibility)
  return <section id="about" className="section about-career" tabIndex={-1}>
    <div className="container">
      <p className="eyebrow">ABOUT ME</p>
      <div className="about-profile">
        <div className="about-profile-copy">
          <div className="about-profile-name"><h2>조강현</h2><span>Level Designer</span></div>
          <p className="about-profile-description">플레이로 완성되는 공간을 설계하는 레벨디자이너 조강현입니다.</p>
          <div className="about-profile-contacts">
            <span className="about-contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2" /></svg><span>2002년생(만24세)</span></span>
            <a className="about-contact" href="tel:01098664636"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 3 4 1 1 5-3 2a15 15 0 0 0 6 6l2-3 5 1 1 4c-1 3-5 3-8 1C7 17 3 12 3 7c0-2 0-3 2-4Z" /></svg><span>010-9866-4636</span></a>
            <a className="about-contact" href="mailto:whrkd34@naver.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg><span>whrkd34@naver.com</span></a>
          </div>
        </div>
      </div>
      <div className="career-layout">
        <section className="career-experience" aria-labelledby="experience-title">
          <div className="career-experience-heading"><p className="career-kicker">프로젝트 및 활동</p><h3 id="experience-title">Experience</h3></div>
          <ol className="career-timeline">
            {experiences.filter(item => item.visibility).map(item => (
              <li key={item.id} className="career-timeline-item">
                <article className="career-work career-summary" aria-labelledby={`work-${item.id}`}>
                  <div className="career-summary-copy">
                    <div className="career-work-meta"><span className="career-category">{item.category}</span></div>
                    <h4 id={`work-${item.id}`}>{item.title}</h4>
                    {item.role?.length ? <p className="career-summary-role">{item.role.join(' · ')}</p> : null}
                    <p className="career-work-description">{item.features ?? item.description}</p>
                    {item.externalUrl && <a className="text-link career-summary-steam" href={item.externalUrl} target="_blank" rel="noopener noreferrer">
                      Steam에서 보기 <span aria-hidden="true">↗</span>
                    </a>}
                  </div>
                  {!!item.covers?.length && <div className="career-summary-media">
                    <div className="career-summary-images">
                      {item.covers.map(cover => <img className="career-summary-cover" key={cover.src} src={assetUrl(cover.src)} alt={cover.alt} loading="lazy" />)}
                    </div>
                  </div>}
                </article>
              </li>
            ))}
          </ol>
        </section>
        <div className="career-sidebar">
          <section className="career-info-card" aria-labelledby="education-title"><p className="career-kicker">학력</p><h3 id="education-title">Education</h3>{education.filter(item => item.visibility).map(item => <div className="education-entry" key={item.id}><h4>{item.institution}</h4><p>{item.major}</p>{item.status && <p className="education-status"><span className="career-tag">{item.status}</span></p>}{item.period && <p className="career-period">{formatDate(item.period.start)}{item.period.end && ` – ${formatDate(item.period.end)}`}</p>}{item.degree && <p>{item.degree}</p>}</div>)}</section>
          <section className="career-info-card" aria-labelledby="skills-title">
            <p className="career-kicker">레벨 디자인 역량</p><h3 id="skills-title">Skills</h3>
            {skills.map(skill => (
              <div className="skill-group" key={skill.id}>
                <h4>{skill.tool}</h4>
                {skill.description && <p>{skill.description}</p>}
                {skill.details && <ul className="skill-details">
                  {skill.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>}
              </div>
            ))}
          </section>
          {visibleAwards.length > 0 && <section className="career-info-card" aria-labelledby="awards-title"><p className="career-kicker">수상</p><h3 id="awards-title">Awards</h3>{visibleAwards.map(item => <div key={item.id}><h4>{item.title}</h4>{item.description && <p>{item.description}</p>}</div>)}</section>}
        </div>
      </div>
    </div>
  </section>
}
