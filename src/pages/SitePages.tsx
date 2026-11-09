import { FormEvent, useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { asset } from '../asset'
import {
  articles,
  blogCategories,
  blogPosts,
  careerBenefits,
  careerPillars,
  careerValues,
  companyPages,
  industries,
  openRoles,
  products,
  services,
  solutionPages,
} from '../data'
import { ArrowRight } from '../components/Icons'

function PageHero({
  eyebrow,
  title,
  body,
  actions,
}: {
  eyebrow?: string
  title: string
  body?: string
  actions?: React.ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {body ? <p className="page-lead">{body}</p> : null}
        {actions}
      </div>
    </section>
  )
}

function CardGrid({
  items,
}: {
  items: { to: string; title: string; summary: string }[]
}) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Link key={item.to} to={item.to} className="content-card">
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <span className="text-link">
            Learn more <ArrowRight />
          </span>
        </Link>
      ))}
    </div>
  )
}

export function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The Neltecho Nexus™ Platform"
        body="Unified protection across endpoint, identity, AI, and cloud — engineered for defenders."
        actions={
          <div className="hero-actions">
            <Link to="/demos" className="btn btn-purple">
              Get a Demo
            </Link>
            <Link to="/pricing" className="btn btn-dark">
              View Pricing
            </Link>
          </div>
        }
      />
      <section className="page-section">
        <div className="container">
          <CardGrid
            items={products.map((item) => ({
              to: `/products/${item.slug}`,
              title: item.name,
              summary: item.summary,
            }))}
          />
        </div>
      </section>
    </>
  )
}

export function ProductPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  if (!product) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Product" title={product.name} body={product.summary} />
      <section className="page-section">
        <div className="container prose">
          <p>{product.body}</p>
          <div className="hero-actions">
            <Link to="/demos" className="btn btn-purple">
              Request a Demo
            </Link>
            <Link to="/products" className="text-link">
              All products <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Security Built Around You"
        body="Use-case and industry solutions that stop attacks before they escalate."
      />
      <section className="page-section">
        <div className="container">
          <CardGrid
            items={solutionPages.map((item) => ({
              to: `/solutions/${item.slug}`,
              title: item.name,
              summary: item.summary,
            }))}
          />
        </div>
      </section>
    </>
  )
}

export function SolutionPage() {
  const { slug } = useParams()
  const item = solutionPages.find((entry) => entry.slug === slug)
  if (!item) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Solution" title={item.name} body={item.summary} />
      <section className="page-section">
        <div className="container prose">
          <p>
            Neltecho helps security teams operationalize {item.name.toLowerCase()} with AI-native
            detection, automated response, and a unified console.
          </p>
          <Link to="/demos" className="btn btn-purple">
            Get a Demo
          </Link>
        </div>
      </section>
    </>
  )
}

export function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Security Tuned for Your Industry"
        body="Solutions shaped by the regulatory, operational, and threat realities of your sector."
      />
      <section className="page-section">
        <div className="container">
          <CardGrid
            items={industries.map((item) => ({
              to: `/industries/${item.slug}`,
              title: item.name,
              summary: item.summary,
            }))}
          />
        </div>
      </section>
    </>
  )
}

export function IndustryPage() {
  const { slug } = useParams()
  const item = industries.find((entry) => entry.slug === slug)
  if (!item) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Industry" title={item.name} body={item.summary} />
      <section className="page-section">
        <div className="container prose">
          <p>
            From compliance pressure to high-impact adversaries, Neltecho protects {item.name.toLowerCase()}{' '}
            organizations with autonomous security intelligence.
          </p>
          <Link to="/contact" className="btn btn-purple">
            Talk to Sales
          </Link>
        </div>
      </section>
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Expert Defense. Always On."
        body="Extend your team with managed detection, hunting, and response."
      />
      <section className="page-section">
        <div className="container">
          <CardGrid
            items={services.map((item) => ({
              to: `/services/${item.slug}`,
              title: item.name,
              summary: item.summary,
            }))}
          />
        </div>
      </section>
    </>
  )
}

export function ServicePage() {
  const { slug } = useParams()
  const item = services.find((entry) => entry.slug === slug)
  if (!item) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Service" title={item.name} body={item.summary} />
      <section className="page-section">
        <div className="container prose">
          <p>
            Neltecho specialists combine platform telemetry with NelteLABS intelligence to deliver{' '}
            {item.name.toLowerCase()} at enterprise scale.
          </p>
          <Link to="/contact" className="btn btn-purple">
            Contact Services
          </Link>
        </div>
      </section>
    </>
  )
}

export function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Join the Global Neltecho Ecosystem"
        body="Grow with MSSP programs, technology alliances, and co-selling motion built for modern security."
      />
      <section className="page-section">
        <div className="container prose">
          <p>
            Whether you deliver managed services or integrate technology, Neltecho partners succeed faster
            with joint solutions and go-to-market support.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-purple">
              Become a Partner
            </Link>
            <Link to="/partners/mssp" className="btn btn-dark">
              MSSP Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function ResourcesPage() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').toLowerCase()
  const filtered = useMemo(
    () =>
      articles.filter(
        (item) =>
          !q ||
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q),
      ),
    [q],
  )

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resource Center"
        body="Reports, webinars, research, and guidance to keep defenders ahead."
      />
      <section className="page-section">
        <div className="container">
          {q ? <p className="search-note">Showing results for “{params.get('q')}”</p> : null}
          <CardGrid
            items={filtered.map((item) => ({
              to: `/resources/${item.slug}`,
              title: item.title,
              summary: item.summary,
            }))}
          />
        </div>
      </section>
    </>
  )
}

export function BlogPage() {
  const [category, setCategory] = useState('All Categories')
  const [query, setQuery] = useState('')
  const featured = blogPosts.filter((post) => post.featured)
  const filtered = blogPosts.filter((post) => {
    const matchesCategory = category === 'All Categories' || post.category === category
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the Front Lines of Cybersecurity"
        body="Get the latest cybersecurity research, threat intelligence, and AI security insights from the Neltecho blog."
        actions={
          <a href="#subscribe" className="btn btn-purple">
            Subscribe Now
          </a>
        }
      />

      <section className="page-section blog-featured">
        <div className="container">
          <div className="blog-featured-grid">
            {featured.map((post) => (
              <Link key={post.slug} to={`/resources/${post.slug}`} className="blog-feature-card">
                <div className="blog-feature-media">
                  <img src={asset(post.image)} alt="" />
                </div>
                <div className="blog-feature-copy">
                  <span className="blog-meta">
                    {post.category} · {post.date}
                  </span>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <span className="text-link">
                    Read More <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section blog-listing">
        <div className="container">
          <div className="blog-toolbar">
            <h2>All Blog Posts</h2>
            <div className="blog-filters">
              {blogCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`blog-chip${category === item ? ' is-active' : ''}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="blog-search">
              <span className="sr-only">Search for an article</span>
              <input
                type="search"
                placeholder="Search for an article"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>

          <div className="blog-grid">
            {filtered.map((post) => (
              <Link key={post.slug} to={`/resources/${post.slug}`} className="blog-card">
                <div className="blog-card-media">
                  <img src={asset(post.image)} alt="" />
                </div>
                <span className="blog-meta">
                  {post.category} · {post.date}
                </span>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <span className="text-link">
                  Read More <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogSubscribe />
    </>
  )
}

export function CareersPage() {
  const [team, setTeam] = useState('All')
  const teams = ['All', ...Array.from(new Set(openRoles.map((role) => role.team)))]
  const roles = openRoles.filter((role) => team === 'All' || role.team === team)

  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <p className="eyebrow">Secure Tomorrow</p>
          <h1>Shape the Future of Cybersecurity</h1>
          <p className="page-lead">
            Join Neltecho and help give defenders the edge back — with AI-native security built for the
            world that runs on AI.
          </p>
          <div className="hero-actions">
            <a href="#open-roles" className="btn btn-purple">
              Explore Open Positions
            </a>
            <Link to="/blog" className="btn btn-dark">
              Life @ Neltecho
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="careers-pillars">
            {careerPillars.map((item) => (
              <article key={item.title} className="careers-pillar">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section careers-benefits">
        <div className="container">
          <div className="section-intro">
            <h2>Live Your Best Life. Do Your Best Work.</h2>
            <p>
              Neltecho offers industry-leading compensation, premium benefits, and tools to help you thrive
              personally and professionally.
            </p>
          </div>
          <div className="careers-benefit-grid">
            {careerBenefits.map((group) => (
              <article key={group.title} className="careers-benefit-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <h2>Living Our Values Every Day</h2>
            <p>
              From building innovative products to fostering exceptional culture, our values sit at the
              center of everything we do.
            </p>
          </div>
          <div className="careers-values">
            {careerValues.map((item) => (
              <article key={item.title} className="careers-value">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section careers-roles" id="open-roles">
        <div className="container">
          <div className="section-intro">
            <h2>Your Career Starts Here</h2>
            <p>Browse open roles across engineering, research, go-to-market, and early career programs.</p>
          </div>
          <div className="blog-filters">
            {teams.map((item) => (
              <button
                key={item}
                type="button"
                className={`blog-chip${team === item ? ' is-active' : ''}`}
                onClick={() => setTeam(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="careers-role-list">
            {roles.map((role) => (
              <article key={`${role.title}-${role.location}`} className="careers-role">
                <div>
                  <h3>{role.title}</h3>
                  <p>
                    {role.team} · {role.location} · {role.type}
                  </p>
                </div>
                <Link to="/contact" className="btn btn-purple">
                  Apply
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section careers-cta">
        <div className="container careers-cta-inner">
          <h2>Ready to Level Up Your Career?</h2>
          <p>
            Join thousands of the best and brightest minds around the world in pushing the boundaries of
            what’s possible in cybersecurity.
          </p>
          <a href="#open-roles" className="btn btn-purple">
            See Job Openings
          </a>
        </div>
      </section>
    </>
  )
}

export function ArticlePage() {
  const { slug } = useParams()
  if (slug === 'blog') return <BlogPage />
  const item = articles.find((entry) => entry.slug === slug) ?? blogPosts.find((entry) => entry.slug === slug)
  if (!item) return <NotFound />
  const title = item.title
  const summary = 'summary' in item ? item.summary : ''
  const eyebrow = 'type' in item ? item.type : 'category' in item ? item.category : 'Blog'
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={summary} />
      <section className="page-section">
        <div className="container prose">
          <p>
            This Neltecho resource covers the key takeaways security leaders need right now — from practical
            defensive guidance to platform capabilities that put AI on the side of defenders.
          </p>
          <Link to="/blog" className="text-link">
            Back to blog <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}

export function CompanyPage() {
  const { slug } = useParams()
  if (slug === 'careers') return <CareersPage />
  const item = companyPages.find((entry) => entry.slug === slug)
  if (!item) {
    if (slug === 'breach') {
      return (
        <>
          <PageHero
            eyebrow="Incident Support"
            title="Experiencing a Breach?"
            body="Get immediate guidance and connect with Neltecho responders."
          />
          <section className="page-section">
            <div className="container prose">
              <p>
                If you suspect an active incident, contact our response team and preserve logs while we help
                you contain and recover.
              </p>
              <Link to="/contact" className="btn btn-purple">
                Contact Incident Response
              </Link>
            </div>
          </section>
        </>
      )
    }
    return <NotFound />
  }
  return (
    <>
      <PageHero eyebrow="Company" title={item.title} body={item.body} />
      <section className="page-section">
        <div className="container prose">
          <p>
            Learn how Neltecho helps organizations secure the AI era with autonomous protection and a
            platform built for modern security operations.
          </p>
          <Link to="/demos" className="btn btn-purple">
            Get a Demo
          </Link>
        </div>
      </section>
    </>
  )
}

export function DemosPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="See the Platform in Action"
        body="Book a guided demo or explore product tours of the Neltecho Nexus platform."
      />
      <section className="page-section">
        <div className="container form-card">
          <DemoForm />
        </div>
      </section>
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Get in Touch"
        title="Contact Us"
        body="Our teams are ready to assist with whatever you need. Select a team below and tell us how we can help."
        actions={
          <div className="hero-actions">
            <Link to="/company/breach" className="btn btn-dark">
              Experiencing a Breach?
            </Link>
            <a href="tel:+18558683733" className="btn btn-ghost-dark">
              +1-855-868-3733
            </a>
          </div>
        }
      />
      <section className="page-section contact-section">
        <div className="container contact-layout">
          <ContactForm />
          <aside className="contact-aside">
            <div className="contact-aside-card">
              <h2>Need Help?</h2>
              <p>Browse common questions or jump straight to the right team.</p>
              <ul className="contact-faq">
                <li>
                  <strong>What is Neltecho?</strong>
                  <span>An AI-native cybersecurity platform for endpoint, identity, cloud, and AI.</span>
                </li>
                <li>
                  <strong>How fast do you respond?</strong>
                  <span>Sales and partner inquiries typically receive a reply within one business day.</span>
                </li>
                <li>
                  <strong>Existing customer?</strong>
                  <span>Use topic “Support” or sign in to your account for console help.</span>
                </li>
              </ul>
              <Link to="/accounts" className="text-link">
                Customer portal <ArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export function AccountsPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Sign in to Neltecho"
        body="Access your console, support cases, and deployment resources."
      />
      <section className="page-section contact-section">
        <div className="container signin-layout">
          <SignInForm />
          <aside className="contact-aside">
            <div className="contact-aside-card">
              <h2>Need an account?</h2>
              <p>New to Neltecho? Talk with sales to get console access for your organization.</p>
              <ul className="contact-faq">
                <li>
                  <strong>Forgot password?</strong>
                  <span>Use the reset link on the form. Recovery emails usually arrive within a few minutes.</span>
                </li>
                <li>
                  <strong>SSO available?</strong>
                  <span>Enterprise tenants can sign in with company SSO once configured by an admin.</span>
                </li>
                <li>
                  <strong>Need help?</strong>
                  <span>Contact support if you cannot reach your console or invitation email.</span>
                </li>
              </ul>
              <Link to="/contact" className="text-link">
                Contact sales <ArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Packages Built for Outcomes"
        body="Flexible packages for endpoint, cloud, identity, and autonomous SOC capabilities."
      />
      <section className="page-section">
        <div className="container pricing-grid">
          {[
            {
              name: 'Core',
              price: 'Talk to sales',
              points: ['Endpoint protection', 'Automated remediation', 'Console & API access'],
            },
            {
              name: 'Complete',
              price: 'Talk to sales',
              points: ['Endpoint + Identity', 'XDR correlation', 'Nelte AI assist'],
            },
            {
              name: 'Enterprise',
              price: 'Talk to sales',
              points: ['Full Nexus platform', 'Cloud + AI security', 'Premier support options'],
            },
          ].map((tier) => (
            <article key={tier.name} className="price-card">
              <h3>{tier.name}</h3>
              <p className="price">{tier.price}</p>
              <ul>
                {tier.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-purple">
                Contact Sales
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy Notice' : 'Terms of Use'
  return (
    <>
      <PageHero title={title} />
      <section className="page-section">
        <div className="container prose">
          <p>
            This is a placeholder {title.toLowerCase()} for the Neltecho marketing site demo. Replace with
            your legal counsel-approved content before production use.
          </p>
        </div>
      </section>
    </>
  )
}

export function SitemapPage() {
  return (
    <>
      <PageHero title="Sitemap" body="Browse key areas of the Neltecho site." />
      <section className="page-section">
        <div className="container sitemap-list">
          <Link to="/">Home</Link>
          <Link to="/products">Platform</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/services/mdr">Services</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
    </>
  )
}

function DemoForm() {
  const [sent, setSent] = useState(false)
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }
  if (sent) {
    return <p className="form-success">Thanks — a Neltecho specialist will reach out shortly.</p>
  }
  return (
    <form className="stack-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          First name
          <input required name="first" />
        </label>
        <label>
          Last name
          <input required name="last" />
        </label>
      </div>
      <label>
        Work email
        <input type="email" required name="email" />
      </label>
      <label>
        Company
        <input required name="company" />
      </label>
      <label>
        What are you most interested in?
        <select name="interest" defaultValue="platform">
          <option value="platform">Full platform demo</option>
          <option value="endpoint">Endpoint security</option>
          <option value="cloud">Cloud security</option>
          <option value="soc">Autonomous SOC</option>
        </select>
      </label>
      <button type="submit" className="btn btn-purple">
        Request Demo
      </button>
    </form>
  )
}

const contactTopics = [
  {
    id: 'sales',
    title: 'Sales',
    body: 'Have questions? Let’s discuss how Neltecho can help your security team.',
    cta: 'Contact Sales',
  },
  {
    id: 'support',
    title: 'Customers',
    body: 'Current customer? Need assistance with your deployment or console?',
    cta: 'Contact Support',
  },
  {
    id: 'partners',
    title: 'Partners',
    body: 'Interested in joining our partner ecosystem, or already a partner with questions?',
    cta: "Let's Chat",
  },
] as const

type ContactTopicId = (typeof contactTopics)[number]['id']

function ContactForm() {
  const [topic, setTopic] = useState<ContactTopicId>('sales')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const active = contactTopics.find((item) => item.id === topic) ?? contactTopics[0]

  const update = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!values.firstName.trim()) next.firstName = 'Enter your first name'
    if (!values.lastName.trim()) next.lastName = 'Enter your last name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid work email'
    if (!values.company.trim()) next.company = 'Enter your company'
    if (values.message.trim().length < 12) next.message = 'Tell us a bit more (at least 12 characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="form-card contact-form-card form-success-card">
        <div className="form-success-icon" aria-hidden="true">
          ✓
        </div>
        <h2>Message received</h2>
        <p>
          Thanks {values.firstName || 'there'}. Our {active.title.toLowerCase()} team will follow up at{' '}
          <strong>{values.email}</strong> within one business day.
        </p>
        <button
          type="button"
          className="btn btn-purple"
          onClick={() => {
            setStatus('idle')
            setValues({ firstName: '', lastName: '', email: '', company: '', phone: '', message: '' })
            setErrors({})
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="form-card contact-form-card">
      <div className="contact-topic-tabs" role="tablist" aria-label="Contact team">
        {contactTopics.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={topic === item.id}
            className={`contact-topic-tab${topic === item.id ? ' is-active' : ''}`}
            onClick={() => setTopic(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="contact-topic-copy">
        <h2>{active.title}</h2>
        <p>{active.body}</p>
      </div>

      <form className="stack-form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <label className={errors.firstName ? 'has-error' : ''}>
            First name
            <input
              name="firstName"
              autoComplete="given-name"
              value={values.firstName}
              onChange={(event) => update('firstName', event.target.value)}
              aria-invalid={Boolean(errors.firstName)}
            />
            {errors.firstName ? <span className="field-error">{errors.firstName}</span> : null}
          </label>
          <label className={errors.lastName ? 'has-error' : ''}>
            Last name
            <input
              name="lastName"
              autoComplete="family-name"
              value={values.lastName}
              onChange={(event) => update('lastName', event.target.value)}
              aria-invalid={Boolean(errors.lastName)}
            />
            {errors.lastName ? <span className="field-error">{errors.lastName}</span> : null}
          </label>
        </div>

        <div className="form-row">
          <label className={errors.email ? 'has-error' : ''}>
            Work email
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>
          <label>
            Phone <span className="optional">(optional)</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => update('phone', event.target.value)}
            />
          </label>
        </div>

        <label className={errors.company ? 'has-error' : ''}>
          Company
          <input
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => update('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
          />
          {errors.company ? <span className="field-error">{errors.company}</span> : null}
        </label>

        <label className={errors.message ? 'has-error' : ''}>
          How can we help?
          <textarea
            name="message"
            rows={5}
            placeholder={`Tell the ${active.title.toLowerCase()} team what you need…`}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="field-error">{errors.message}</span> : null}
        </label>

        <div className="form-actions">
          <button type="submit" className="btn btn-purple" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : active.cta}
          </button>
          <p className="form-note">By submitting, you agree to be contacted about Neltecho products and services.</p>
        </div>
      </form>
    </div>
  )
}

function BlogSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Enter a valid work email')
      setStatus('error')
      return
    }
    setError('')
    setStatus('submitting')
    await new Promise((resolve) => window.setTimeout(resolve, 650))
    setStatus('success')
  }

  return (
    <section className="page-section blog-subscribe" id="subscribe">
      <div className="container">
        <div className="blog-subscribe-panel">
          <div className="blog-subscribe-copy">
            <p className="eyebrow">Subscribe</p>
            <h2>Get the Latest From the Neltecho Blog</h2>
            <p>Threat research, AI security insights, and product news — delivered as it ships.</p>
            <ul className="blog-subscribe-perks">
              <li>Weekly threat briefings</li>
              <li>AI security deep dives</li>
              <li>Product updates first</li>
            </ul>
          </div>

          <div className="blog-subscribe-form-wrap">
            {status === 'success' ? (
              <div className="blog-subscribe-success" role="status">
                <div className="form-success-icon" aria-hidden="true">
                  ✓
                </div>
                <h3>You’re subscribed</h3>
                <p>
                  Thanks — we’ll send new posts to <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost-light"
                  onClick={() => {
                    setEmail('')
                    setStatus('idle')
                  }}
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <form className="blog-subscribe-form" onSubmit={onSubmit} noValidate>
                <label className="blog-subscribe-label" htmlFor="blog-email">
                  Work email
                </label>
                <div className={`blog-subscribe-row${status === 'error' ? ' has-error' : ''}`}>
                  <input
                    id="blog-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (status === 'error') {
                        setStatus('idle')
                        setError('')
                      }
                    }}
                    aria-invalid={status === 'error'}
                    aria-describedby={error ? 'blog-email-error' : undefined}
                  />
                  <button type="submit" className="btn btn-purple" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </div>
                {error ? (
                  <p id="blog-email-error" className="field-error">
                    {error}
                  </p>
                ) : (
                  <p className="form-note light">No spam. Unsubscribe anytime.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [resetSent, setResetSent] = useState(false)

  const validate = () => {
    const next: Record<string, string> = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter a valid work email'
    if (password.length < 8) next.password = 'Password must be at least 8 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setResetSent(false)
    if (!validate()) return
    setStatus('submitting')
    await new Promise((resolve) => window.setTimeout(resolve, 750))
    setStatus('success')
  }

  const onForgotPassword = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrors({ email: 'Enter your work email to reset password' })
      return
    }
    setErrors({})
    setResetSent(true)
  }

  if (status === 'success') {
    return (
      <div className="form-card contact-form-card form-success-card">
        <div className="form-success-icon" aria-hidden="true">
          ✓
        </div>
        <h2>Signed in</h2>
        <p>
          Welcome back. This demo confirms sign-in for <strong>{email}</strong>
          {remember ? ' and will keep you signed in on this device.' : '.'}
        </p>
        <div className="form-actions-row">
          <Link to="/" className="btn btn-purple">
            Go to homepage
          </Link>
          <button
            type="button"
            className="btn btn-ghost-dark"
            onClick={() => {
              setStatus('idle')
              setPassword('')
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card contact-form-card signin-form-card">
      <div className="contact-topic-copy">
        <h2>Console sign in</h2>
        <p>Use your Neltecho work credentials to access the management console.</p>
      </div>

      <form className="stack-form" onSubmit={onSubmit} noValidate>
        <label className={errors.email ? 'has-error' : ''}>
          Work email
          <input
            type="email"
            name="email"
            autoComplete="username"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setResetSent(false)
              setErrors((prev) => {
                if (!prev.email) return prev
                const next = { ...prev }
                delete next.email
                return next
              })
            }}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>

        <label className={errors.password ? 'has-error' : ''}>
          Password
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setErrors((prev) => {
                  if (!prev.password) return prev
                  const next = { ...prev }
                  delete next.password
                  return next
                })
              }}
              aria-invalid={Boolean(errors.password)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password ? <span className="field-error">{errors.password}</span> : null}
        </label>

        <div className="signin-meta">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <span>Keep me signed in</span>
          </label>
          <button type="button" className="text-button" onClick={onForgotPassword}>
            Forgot password?
          </button>
        </div>

        {resetSent ? (
          <p className="form-inline-success" role="status">
            Password reset link sent to <strong>{email}</strong>.
          </p>
        ) : null}

        <div className="form-actions">
          <button type="submit" className="btn btn-purple" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="form-note">Protected by enterprise SSO options for eligible tenants.</p>
        </div>
      </form>

      <div className="signin-divider">
        <span>or</span>
      </div>

      <button type="button" className="btn btn-ghost-dark signin-sso" disabled>
        Continue with company SSO
      </button>
    </div>
  )
}

function NotFound() {
  return (
    <>
      <PageHero title="Page not found" body="The page you requested is not available." />
      <section className="page-section">
        <div className="container">
          <Link to="/" className="btn btn-purple">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
