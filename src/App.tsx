import { assetUrl } from './assetUrl'
import './App.css'
import LevelClip from './LevelClip'
import About from './About'
import ProjectDetails from './ProjectDetails'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { projectInfo, projectL } from './projectData'
import LevelStudies from './LevelStudies'
import ProjectLStudies from './ProjectLStudies'
import ProjectPicker from './ProjectPicker'
import HeroIntro from './HeroIntro'
import { shouldPlayHeroIntro } from './heroIntroState'

const homeNav = [['home', 'Home'], ['projects', 'Project'], ['about', 'About me']]
type DetailRoute = { entryId: string; overviewId: string; contactId: string; detailsId?: string }

const deltaRoute: DetailRoute = { entryId: 'play', overviewId: 'overview', detailsId: 'levels', contactId: 'project-contact' }
const projectLRoute = { entryId: projectL.entryId, overviewId: 'project-l-overview', detailsId: 'project-l-details', contactId: 'project-l-contact' } satisfies DetailRoute

function getPageFragment() {
  const fragment = window.location.hash.slice(1)
  return fragment === 'iteration' ? 'levels' : fragment
}

type SectionNavigation = {
  activeSection: string | null
  selectSection: (id: string) => void
}

function SiteHeader({ activeSection, selectSection, contactId, scrolled, alignWithContent }: SectionNavigation & {
  contactId: string
  scrolled: boolean
  alignWithContent: boolean
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const items = [...homeNav, [contactId, 'Contact']]
  const currentTitle = items.find(([id]) => id === activeSection)?.[1]

  useEffect(() => {
    if (!menuOpen) return

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggle.current?.focus()
    }

    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className={alignWithContent ? 'nav-wrap container' : 'nav-wrap'}>
        <a className="header-brand" href="#home" aria-label="JOKANGHYEON LevelDesign 처음으로" onClick={() => setMenuOpen(false)}>
          <img src={assetUrl('/jokanghyeon.svg')} width={64} height={64} alt="" />
        </a>
        <div className="header-menu" ref={menu}>
          <button ref={toggle} className="menu-toggle" type="button" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {currentTitle && <span className="menu-current-section" aria-hidden="true">{currentTitle}</span>}
            <span className="menu-toggle-icon" aria-hidden="true"><span /><span /><span /></span>
          </button>
          <nav id="site-menu" className="header-menu-panel" aria-label="주요 메뉴" data-open={menuOpen}>
            {items.map(([id, title]) => (
              <a key={id} href={`#${id}`} className={id === contactId ? 'menu-contact' : undefined}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={() => {
                  selectSection(id)
                  setMenuOpen(false)
                }}>
                {title}
                {id === contactId && <span aria-hidden="true"> ↗</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function ProjectDetailPage({ route, activeSection }: Pick<SectionNavigation, 'activeSection'> & { route: DetailRoute }) {
  const toolbar = useRef<HTMLDivElement>(null)
  const isProjectL = route === projectLRoute
  const project = isProjectL ? projectL : projectInfo
  const { src, poster } = project.heroVideo

  useLayoutEffect(() => {
    const element = toolbar.current
    if (!element) return

    const root = document.documentElement
    const updateToolbarHeight = () => {
      root.style.setProperty('--detail-toolbar-height', `${element.getBoundingClientRect().height}px`)
    }

    updateToolbarHeight()
    const observer = new ResizeObserver(updateToolbarHeight)
    observer.observe(element)
    return () => {
      observer.disconnect()
      root.style.removeProperty('--detail-toolbar-height')
    }
  }, [])

  return <>
    <div className="project-detail-hero" style={{ backgroundImage: `url("${assetUrl(poster)}")` }}>
      <LevelClip src={src} poster={poster} title={project.title} background />
      <div className="project-detail-hero-title">
        <p>{isProjectL ? '세 병사의 시점을 이어 성벽을 넘고 성문을 여는 3인칭 공성전' : '플레이어의 행동이 다음 사건을 부르고 탈출 경로를 바꾸는 3인칭 생존 호러'}</p>
        <h1>{project.title}</h1>
        <div className="project-detail-hero-actions">
          {isProjectL
            ? <>
                <a className="button primary" href={projectL.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube에서 Project L 영상 보기, 새 탭에서 열기">
                  <span aria-hidden="true">▶</span> YouTube
                </a>
                <a className="button secondary" href={assetUrl(projectL.document)} target="_blank" rel="noopener noreferrer" aria-label="Document, Project L 기획서 PDF를 새 탭에서 열기">
                  Document <span aria-hidden="true">↗</span>
                </a>
              </>
            : <>
                <a className="button primary" href="https://youtu.be/iVRXsP2-A-A" target="_blank" rel="noopener noreferrer" aria-label="YouTube에서 Operation: Delta 영상 보기, 새 탭에서 열기">
                  <span aria-hidden="true">▶</span> YouTube
                </a>
                <a className="button secondary" href={assetUrl(projectInfo.document)} target="_blank" rel="noopener noreferrer" aria-label="Document, 포트폴리오 PDF를 새 탭에서 열기">
                  Document <span aria-hidden="true">↗</span>
                </a>
              </>}
        </div>
      </div>
    </div>
    <div className="project-detail-toolbar" ref={toolbar}>
      <div className="project-detail-navigation">
        <a className="text-link" href="#projects" aria-label="PROJECTS">← PROJECTS</a>
        <nav aria-label={`${project.title} 상세 메뉴`}>
          <a href={`#${route.overviewId}`} aria-current={activeSection === route.overviewId ? 'true' : undefined}>OVERVIEW</a>
          {route.detailsId && <a href={`#${route.detailsId}`} aria-current={activeSection === route.detailsId ? 'true' : undefined}>DETAILS</a>}
        </nav>
      </div>
    </div>
    <section className="section soft project-detail-overview-section" id={route.entryId} aria-labelledby={route.overviewId}>
      <div className="container">
        <ProjectDetails overviewId={route.overviewId} isProjectL={isProjectL} />
      </div>
    </section>
    {isProjectL ? <ProjectLStudies sectionId={projectLRoute.detailsId} /> : <LevelStudies />}
  </>
}

function App() {
  const [anchor, setAnchor] = useState(getPageFragment)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const detailRoute = [deltaRoute, projectLRoute].find(route =>
    anchor === route.entryId || anchor === route.overviewId || anchor === route.detailsId || anchor === route.contactId,
  )
  const pageEntry = detailRoute?.entryId ?? 'home'
  const contactId = detailRoute?.contactId ?? 'contact'
  const firstSection = detailRoute?.overviewId ?? 'home'
  const [activeSection, setActiveSection] = useState(() =>
    anchor === contactId || anchor === detailRoute?.detailsId || homeNav.some(([id]) => id === anchor) ? anchor : firstSection,
  )
  const headerSection = detailRoute && activeSection !== contactId ? 'projects' : activeSection
  const [heroIntro, setHeroIntro] = useState<'intro' | 'reveal' | 'static'>(() => shouldPlayHeroIntro(getPageFragment()) ? 'intro' : 'static')

  useEffect(() => {
    const updateAnchor = () => setAnchor(getPageFragment())
    window.addEventListener('hashchange', updateAnchor)
    return () => window.removeEventListener('hashchange', updateAnchor)
  }, [])

  useLayoutEffect(() => {
    // Resolve deep links whose targets are mounted when the page type changes.
    const target = document.getElementById(getPageFragment())
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pageEntry])

  useEffect(() => {
    const sectionIds = detailRoute
      ? [detailRoute.overviewId, detailRoute.detailsId].filter(id => id !== undefined)
      : homeNav.map(([id]) => id)
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(section => section !== null)
    const footer = document.getElementById(contactId)
    const highlightVisibleFooter = !detailRoute || detailRoute.detailsId !== undefined || anchor === contactId

    function updateActiveSection() {
      setScrolled(window.scrollY > 24)
      const detailOffset = detailRoute ? parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) : 0
      const threshold = detailRoute ? detailOffset + 16 : window.innerHeight * 0.4
      const footerPosition = footer?.getBoundingClientRect()
      if (footerPosition && (footerPosition.top <= threshold || (
        highlightVisibleFooter && footerPosition.top < window.innerHeight && footerPosition.bottom <= window.innerHeight + 1
      ))) {
        setActiveSection(contactId)
        return
      }
      const current = sections.findLast(section => section.getBoundingClientRect().top <= threshold)
      setActiveSection(current?.id ?? firstSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [anchor, detailRoute, contactId, firstSection])

  return <>
    <a className="skip-link" href={`#${firstSection}`}>본문으로 이동</a>
    <SiteHeader contactId={contactId} activeSection={headerSection} selectSection={setActiveSection} scrolled={scrolled} alignWithContent={!detailRoute} />
    <main id="main">
      {detailRoute ? <ProjectDetailPage key={pageEntry} route={detailRoute} activeSection={activeSection} /> : <>
        <section className="hero hero-split hero-full" id="home" tabIndex={-1} data-intro={heroIntro}>
          <LevelClip src="/videos/hero-main.mp4" poster="/videos/hero-main.webp" title="" background />
          <div className="hero-shade" aria-hidden="true" />
          {heroIntro !== 'static' && <HeroIntro
            onReveal={() => setHeroIntro('reveal')}
            onDone={() => setHeroIntro('static')}
            onSkip={() => setHeroIntro('static')} />}
          <div className="container hero-full-content"><div className="hero-copy">
            <div className="eyebrow">LEVEL DESIGN PORTFOLIO</div>
            <h1>레벨디자이너 조강현</h1>
            <p className="hero-description">플레이로 완성되는 공간을 설계하는 레벨디자이너 조강현입니다.</p>
          </div></div>
          <a className="button secondary hero-project-link" href="#projects">VIEW PROJECTS <span aria-hidden="true">↓</span></a>
        </section>
        <ProjectPicker />
        <About />
      </>}
    </main>
    <footer id={contactId} className="site-footer">
      <div className="container">
        <div className="site-footer-content">
          <div>
            <p className="site-footer-name">JOKANGHYEON</p>
            <p className="site-footer-role">Level Designer</p>
            <p className="site-footer-contact">CONTACT</p>
            <a className="site-footer-email" href="mailto:whrkd34@naver.com">whrkd34@naver.com</a>
          </div>
          <nav aria-label="푸터 메뉴">
            {homeNav.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}
          </nav>
          <a className="site-footer-top" href={`#${pageEntry}`}>맨 위로 <span aria-hidden="true">↑</span></a>
        </div>
        <p className="site-footer-credit">© 2026 JOKANGHYEON</p>
      </div>
    </footer>
  </>
}
export default App















