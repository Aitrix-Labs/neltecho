import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'
import HeroBackground from '../components/HeroBackground'
import {
  difference,
  differenceMedia,
  latest,
  platformTabs,
  ratings,
  recognition,
  resources,
  solutions,
  stories,
  trustLogos,
} from '../data'
import { ArrowRight, CheckIcon, PlayIcon } from '../components/Icons'

export default function HomePage() {
  const [tab, setTab] = useState(platformTabs[0].id)
  const [logoPaused, setLogoPaused] = useState(false)
  const [storyStep, setStoryStep] = useState(0)
  const current = platformTabs.find((item) => item.id === tab) ?? platformTabs[0]

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('story-scroll')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - rect.top) / (rect.height * 0.6)))
      setStoryStep(progress > 0.48 ? 1 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <section className="hero">
        <HeroBackground />
        <div className="container hero-inner">
          <h1 className="reveal">The World Runs on AI. We Secure It.</h1>
          <p className="hero-lead reveal">
            One AI-native platform. Unified protection across endpoint, identity, AI, and cloud. Built to
            give defenders the edge back, so they don&apos;t just keep up, they stay ahead.
          </p>
          <div className="hero-actions reveal">
            <Link to="/demos" className="btn btn-light">
              Free Platform Demo
            </Link>
            <Link to="/demos" className="btn btn-ghost-light">
              See It in Action
            </Link>
          </div>
          <button type="button" className="hero-play reveal" aria-label="Play overview">
            <PlayIcon />
          </button>
        </div>
      </section>

      <section className="trust-bar" aria-label="Trusted by">
        <div className="trust-bg" style={{ backgroundImage: `url(${asset('images/hero/trust-gradient.webp')})` }} />
        <div className="trust-inner">
          <span className="trust-label">Trusted by</span>
          <div className={`logo-marquee${logoPaused ? ' is-paused' : ''}`}>
            <div className="logo-track">
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <span
                  className="logo-slot"
                  key={`${logo.name}-${index}`}
                  style={
                    {
                      ['--logo-w']: logo.w,
                      ['--logo-h']: logo.h,
                    } as CSSProperties
                  }
                >
                  <img src={`${asset(logo.src)}?v=2`} alt={logo.name} />
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="pause-btn"
            aria-label={logoPaused ? 'Play logo carousel' : 'Pause logo carousel'}
            onClick={() => setLogoPaused((value) => !value)}
          >
            {logoPaused ? (
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 2.2v7.6L10 6 3 2.2Z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <rect x="2.2" y="2" width="2.4" height="8" rx="0.6" fill="currentColor" />
                <rect x="7.4" y="2" width="2.4" height="8" rx="0.6" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </section>

      <section className="story-scroll" id="story-scroll">
        <div className={`story-panel${storyStep === 0 ? ' is-active' : ''}`}>
          <img src={asset('images/story/step-02.webp')} alt="" className="story-bg" />
          <div className="container story-copy-block reveal">
            <h2>AI changed everything. The threat landscape included.</h2>
            <p>
              Attackers now use AI to generate code, move at machine speed, and exploit gaps. The old model
              was built for a slower era. That era is over.
            </p>
          </div>
        </div>
        <div className={`story-panel${storyStep === 1 ? ' is-active' : ''}`}>
          <img src={asset('images/story/step-03.webp')} alt="" className="story-bg" />
          <div className="container story-copy-block reveal">
            <h2>The AI era demands a new advantage. Neltecho delivers it.</h2>
            <p>
              One platform powered by Autonomous Security Intelligence. Built to stop emerging threats at
              machine speed and give defenders the upper hand.
            </p>
          </div>
        </div>
        <div className="story-progress" aria-hidden="true">
          <span className={storyStep === 0 ? 'on' : ''}>01</span>
          <i />
          <span className={storyStep === 1 ? 'on' : ''}>02</span>
        </div>
      </section>

      <section className="platform">
        <div className="container">
          <p className="eyebrow center reveal">The AI-Native Cybersecurity Platform</p>
          <h2 className="section-title center reveal">
            Built for Defenders.
            <br />
            Engineered for Advantage.
          </h2>

          <div className="platform-tabs reveal" role="tablist" aria-label="Platform areas">
            {platformTabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={tab === item.id ? 'active' : ''}
                onClick={() => setTab(item.id)}
              >
                <i />
                {item.label}
              </button>
            ))}
          </div>

          <div className="platform-panel reveal" role="tabpanel">
            <div className="platform-copy">
              <h3>{current.title}</h3>
              <p>{current.body}</p>
              <ul>
                {current.points.map((point) => (
                  <li key={point}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-actions">
                <Link to={current.primary.to} className="btn btn-purple">
                  {current.primary.label}
                </Link>
                <Link to={current.secondary.to} className="text-link">
                  {current.secondary.label} <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="platform-visual">
              <img key={current.id} src={asset(current.image)} alt="" className="platform-shot" />
            </div>
          </div>
        </div>
      </section>

      <section className="recognition">
        <div className="container">
          <p className="eyebrow center reveal">Recognition</p>
          <h2 className="section-title center reveal">Tested. Evaluated. Proven.</h2>
          <div className="recognition-grid">
            {recognition.map((item) => (
              <article key={item.title} className="recognition-card media-card reveal">
                <div className="media-frame">
                  <img src={asset(item.image)} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link to={item.to} className="text-link">
                  {item.cta} <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference">
        <div className="container">
          <div className="difference-header reveal">
            <p className="eyebrow">The Neltecho Difference</p>
            <h2 className="section-title">A New Standard for Security Operations</h2>
            <Link to="/platform" className="btn btn-ghost-light">
              Explore the Nexus Platform
            </Link>
          </div>

          <div className="difference-media reveal">
            <img src={asset(differenceMedia.src)} alt={differenceMedia.alt} />
          </div>

          <div className="difference-columns reveal">
            {difference.map((item) => (
              <article key={item.title} className="difference-card">
                <span className="difference-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="solutions"
        style={{ backgroundImage: `url(${asset('images/solutions/gradient.webp')})` }}
      >
        <div className="container">
          <p className="eyebrow center reveal">Solutions</p>
          <h2 className="section-title center reveal">
            Security Built Around You. Not the Other Way Around
          </h2>
          <div className="solutions-grid">
            {solutions.map((item) => (
              <article key={item.title} className="solution-card media-card reveal">
                <div className="media-frame tall">
                  <img src={asset(item.image)} alt="" />
                  <img className="ornament" src={asset(item.ornament)} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link to={item.to} className="text-link">
                  {item.cta} <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="latest">
        <div className="container">
          <p className="eyebrow center reveal">What&apos;s Happening</p>
          <h2 className="section-title center reveal">The Latest from Neltecho</h2>
          <div className="latest-grid">
            {latest.map((item) => (
              <article key={item.title} className="latest-card media-card reveal">
                <div className="media-frame">
                  <img src={asset(item.image)} alt="" />
                </div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <Link to={item.to} className="text-link">
                  {item.cta} <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories">
        <div className="container">
          <p className="eyebrow center reveal">Success Stories</p>
          <h2 className="section-title center reveal">Trusted by Industry Leaders Worldwide</h2>
          <div className="stories-grid">
            {stories.map((item) => (
              <blockquote key={item.name} className="story-quote media-card reveal">
                <div className="media-frame">
                  <img src={asset(item.image)} alt="" />
                </div>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="ratings reveal">
            {ratings.map((item, index) => (
              <div key={item.label}>
                <img
                  className="rating-logo"
                  src={asset(
                    index === 0
                      ? 'images/stories/logo-g2.svg'
                      : index === 1
                        ? 'images/stories/logo-peerspot.svg'
                        : 'images/stories/logo-gartner-peer.svg',
                  )}
                  alt=""
                />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="center-actions reveal">
            <Link to="/company/customers" className="btn btn-purple">
              See Customer Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="resources">
        <div className="container">
          <div className="resources-head reveal">
            <div>
              <p className="eyebrow">Resources</p>
              <h2 className="section-title">Stay Ahead of What’s Next</h2>
            </div>
            <Link to="/resources" className="btn btn-dark">
              Resource Center
            </Link>
          </div>
          <div className="resources-grid">
            {resources.map((item) => (
              <article key={item.title} className="resource-card media-card reveal">
                <div className="media-frame">
                  <img src={asset(item.image)} alt="" />
                </div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <Link to={item.to} className="text-link">
                  {item.cta} <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
