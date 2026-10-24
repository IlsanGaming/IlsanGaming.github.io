import { assetUrl } from './assetUrl'
import './App.css'
import LevelClip from './LevelClip'
import About from './About'
import ProjectDetails from './ProjectDetails'

import { useState } from 'react'
import { projectInfo } from './projectData'
import LevelStudies from './LevelStudies'

const nav = [['play', 'Portfolio'], ['levels', 'Details'], ['iteration', 'Al Workflow'], ['about', 'About me']]
function App() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  return <>
    <a className="skip-link" href="#main">본문으로 이동</a>
    <header className="header"><div className="nav-wrap"><a className="brand header-brand" href="#home" aria-label="JOKANGHYEON LevelDesign 처음으로"><span>JOKANGHYEON</span><small>{Array.from('LevelDesign').map((letter, index) => <span key={index} aria-hidden="true">{letter}</span>)}</small></a><nav aria-label="주요 메뉴">{nav.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}</nav><a className="nav-video" href="#play">플레이 영상 <span aria-hidden="true">↗</span></a></div></header>
    <main id="main">
      <section className="hero hero-split hero-full" id="home">
        <LevelClip src="/videos/hero-main.mp4" poster="/videos/hero-main.webp" title="" background />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-full-content"><div className="hero-copy">

          <div className="eyebrow">LEVEL DESIGN PORTFOLIO</div>
          <h1>레벨디자이너 조강현</h1>
          <p className="hero-description">실제 플레이로 답하는 레벨디자이너 조강현입니다.</p>
          <div className="hero-actions"><a className="button primary" href="#play"><span aria-hidden="true">▷</span> 플레이 영상 보기</a><a className="button secondary" href="#levels">레벨 디자인 살펴보기 <span aria-hidden="true">↓</span></a></div>
        </div></div>
      </section>
      <section id="play" className="section soft"><div className="container"><div className="section-top"><div><p className="eyebrow">PROJECTS</p><h2>{projectInfo.title}</h2></div><div className="playthrough-links"><a className="text-link" href={assetUrl("/documents/Operation_Delta_Level_Design_Portfolio.pdf")} target="_blank" rel="noopener noreferrer" aria-label="레벨 디자인 포트폴리오 PDF, 새 탭에서 열기">레벨 디자인 포트폴리오 PDF ↗</a><a className="text-link" href="https://youtu.be/iVRXsP2-A-A" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></div><div className="video-frame">{!videoLoaded && <div className="video-loading" role="status">플레이 영상을 불러오는 중입니다.<br />아래 원본 링크로도 시청할 수 있습니다.</div>}<iframe src="https://www.youtube-nocookie.com/embed/iVRXsP2-A-A" title="좀비 서바이벌 레벨 디자인 플레이 영상" loading="eager" onLoad={() => setVideoLoaded(true)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><p className="caption">영상이 재생되지 않나요? <a href="https://youtu.be/iVRXsP2-A-A" target="_blank" rel="noopener noreferrer">원본 영상 열기 ↗</a></p><ProjectDetails /></div></section>
      <LevelStudies />
      <section id="iteration" className="section container"><h2>Al Workflow</h2><div className="comparison"><h3>초기 블록아웃과 현재 플레이 구현</h3><div className="compare-grid"><article><div className="compare-label">BEFORE <span>초기 블록아웃</span></div><LevelClip src="/videos/legacy-blockout.mp4" poster="/videos/legacy-blockout.webp" title="초기 블록아웃" scrollAutoplay /><p className="compare-description">플레이어가 접근하면 좀비가 생성되는 단순한 구조로 구현한 초기 화면입니다.</p></article><article><div className="compare-label blue">AFTER <span>— 실제 플레이 화면</span></div><LevelClip src="/videos/legacy-improved.mp4" poster="/videos/legacy-improved.webp" title="실제 플레이 화면" scrollAutoplay /><p className="compare-description">초기 블록아웃의 공간 구조를 개선하고, Unreal MCP를 활용해 플레이어의 행동이 다음 사건으로 이어지도록 게임 시스템을 구현했습니다.</p></article></div></div></section>
      <About />
    </main><footer><div className="container footer-inner"><a className="brand" href="#home">WHY HERE<span>?</span></a><p>왜 이곳이어야 하는가? <span>Level Design Portfolio</span></p></div></footer>
  </>
}
export default App















