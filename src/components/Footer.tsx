import { Link } from 'react-router-dom'
import { asset } from '../asset'
import { footerColumns } from '../data'
import { FacebookIcon, LinkedInIcon, LogoMark, XIcon, YouTubeIcon } from './Icons'

const social = [
  { label: 'X', href: 'https://x.com/', icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedInIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: YouTubeIcon },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="container footer-cta-band"
        style={{ backgroundImage: `url(${asset('images/cta/gradient.webp')})` }}
      >
        <div className="footer-cta-copy">
          <p className="eyebrow">Next Steps</p>
          <h2>Your Security Advantage Starts Here</h2>
          <div className="footer-cta-actions">
            <Link to="/demos" className="btn btn-purple">
              Get a Demo
            </Link>
            <Link to="/demos" className="btn btn-ghost-light">
              See It in Action
            </Link>
          </div>
          <ul className="footer-quick">
            <li>
              <Link to="/demos">Product Tours</Link>
            </li>
            <li>
              <Link to="/company/why">Why Neltecho</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing & Packages</Link>
            </li>
            <li>
              <Link to="/company/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <img className="footer-cta-shot" src={asset('images/cta/dashboard.webp')} alt="" />
      </div>

      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <LogoMark className="brand-mark" />
            <span className="brand-name">Neltecho</span>
          </Link>
          <p>AI-native cybersecurity for endpoint, identity, AI, and cloud.</p>
          <div className="socials" aria-label="Social links">
            {social.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div className="footer-col" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <div className="footer-legal">
          <Link to="/privacy">Privacy Notice</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <span>©{new Date().getFullYear()} Neltecho. All rights reserved.</span>
      </div>
    </footer>
  )
}
