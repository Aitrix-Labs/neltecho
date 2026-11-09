import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, promo } from '../data'
import { ArrowRight, ChevronDown, CloseIcon, LogoMark, MenuIcon, SearchIcon, SignInIcon } from './Icons'

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const active = navItems.find((item) => item.label === open && item.columns)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(null)
        setSearchOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(null)
        setSearchOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeMenus = () => {
    setOpen(null)
    setMobileOpen(false)
    setSearchOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${mobileOpen ? ' is-menu' : ''}`} ref={rootRef}>
      <div className="promo-bar">
        <Link to={promo.to} className="promo-main">
          <span>{promo.text}</span>
          <em>
            {promo.cta} <ArrowRight />
          </em>
        </Link>
        <div className="promo-tools">
          <Link to="/company/breach">Experiencing a breach?</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
          <button type="button" className="icon-btn" aria-label="Search" onClick={() => setSearchOpen((v) => !v)}>
            <SearchIcon />
          </button>
          <Link to="/accounts" className="icon-btn signin-btn" aria-label="Sign in" title="Sign in">
            <SignInIcon />
          </Link>
        </div>
      </div>

      <div className="nav-shell">
        <div className="nav-pill">
          <Link to="/" className="brand" aria-label="Neltecho home" onClick={closeMenus}>
            <LogoMark className="brand-mark" />
            <span className="brand-name">Neltecho</span>
          </Link>

          <nav className={`primary-nav${mobileOpen ? ' open' : ''}`} aria-label="Primary">
            {navItems.map((item) => {
              if (item.href) {
                return (
                  <NavLink key={item.label} to={item.href} className="nav-trigger" onClick={closeMenus}>
                    {item.label}
                  </NavLink>
                )
              }

              const isOpen = open === item.label
              return (
                <div key={item.label} className={`nav-item${isOpen ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => {
                      setSearchOpen(false)
                      setOpen(isOpen ? null : item.label)
                    }}
                  >
                    {item.label}
                    <ChevronDown />
                  </button>
                </div>
              )
            })}

            <div className="mobile-cta">
              <Link to="/demos" className="btn btn-purple" onClick={closeMenus}>
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-dark" onClick={closeMenus}>
                Contact Sales
              </Link>
            </div>
          </nav>

          <div className="nav-actions">
            <Link to="/demos" className="btn btn-purple">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn-dark">
              Contact Sales
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((v) => !v)
                setOpen(null)
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {active?.columns ? (
          <div className="mega" role="region" aria-label={`${active.label} menu`}>
            <div className="mega-grid">
              {active.columns.map((column) => (
                <div className="mega-col" key={column.title}>
                  <p className="mega-heading">{column.title}</p>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.to} onClick={closeMenus}>
                          <strong>{link.label}</strong>
                          {link.desc ? <span>{link.desc}</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {active.featured ? (
                <aside className="mega-feature">
                  <p className="mega-heading">Featured</p>
                  <h3>{active.featured.title}</h3>
                  <p>{active.featured.body}</p>
                  <Link to={active.featured.to} onClick={closeMenus}>
                    {active.featured.cta} <ArrowRight />
                  </Link>
                </aside>
              ) : null}
            </div>
          </div>
        ) : null}

        {searchOpen ? (
          <form
            className="search-panel"
            onSubmit={(event) => {
              event.preventDefault()
              closeMenus()
              window.location.assign(`${import.meta.env.BASE_URL}resources?q=${encodeURIComponent(query)}`)
            }}
          >
            <SearchIcon />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Neltecho"
              aria-label="Search"
            />
          </form>
        ) : null}
      </div>
    </header>
  )
}
