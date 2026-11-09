export type NavLink = { label: string; to: string; desc?: string }
export type NavColumn = { title: string; links: NavLink[] }
export type NavItem = {
  label: string
  href?: string
  columns?: NavColumn[]
  featured?: { title: string; body: string; to: string; cta: string }
}

export const brand = {
  name: 'Neltecho',
  domain: 'neltecho',
  tagline: 'AI-Powered Enterprise Cybersecurity Platform',
}

export const promo = {
  text: 'STOPPING PHP2SHELL: HOW NELTECHO PROTECTS CUSTOMERS FROM THIS ATTACK TECHNIQUE',
  cta: 'Read More',
  to: '/resources/php2shell',
}

export const navItems: NavItem[] = [
  {
    label: 'Platform',
    columns: [
      {
        title: 'Platform & Products',
        links: [
          { label: 'Platform', to: '/products', desc: 'Unified enterprise security' },
          { label: 'Endpoint Security', to: '/products/endpoint', desc: 'AI-native endpoint protection' },
          { label: 'Cloud Security', to: '/products/cloud', desc: 'CNAPP for modern cloud' },
          { label: 'AI Security', to: '/products/ai-security', desc: 'Secure AI tools and models' },
          { label: 'Autonomous SOC', to: '/products/autonomous-soc', desc: 'Agentic security operations' },
        ],
      },
      {
        title: 'Nexus™ Platform',
        links: [
          { label: 'Nexus Platform', to: '/products/nexus', desc: 'Machine-speed protection, intelligence, and response' },
          { label: 'XDR', to: '/products/xdr', desc: 'Cross-domain detection and response' },
          { label: 'Identity Security', to: '/products/identity', desc: 'Stop credential misuse in real time' },
        ],
      },
    ],
    featured: {
      title: 'Nexus™ Platform',
      body: 'Unified enterprise security. Machine-speed protection, intelligence, and response.',
      to: '/products/nexus',
      cta: 'Explore the Platform',
    },
  },
  {
    label: 'Solutions',
    columns: [
      {
        title: 'For Threat Protection',
        links: [
          { label: 'Ransomware', to: '/solutions/ransomware' },
          { label: 'Supply Chain Attacks', to: '/solutions/supply-chain' },
          { label: 'Identity Threats', to: '/solutions/identity-threats' },
        ],
      },
      {
        title: 'For Security Operations',
        links: [
          { label: 'SOC Acceleration', to: '/solutions/soc' },
          { label: 'Threat Hunting', to: '/solutions/threat-hunting' },
          { label: 'Incident Response', to: '/solutions/incident-response' },
        ],
      },
      {
        title: 'For Industries',
        links: [
          { label: 'Healthcare', to: '/industries/healthcare' },
          { label: 'Financial Services', to: '/industries/financial' },
          { label: 'Manufacturing', to: '/industries/manufacturing' },
          { label: 'See All Industries', to: '/industries' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        title: 'Managed Services',
        links: [
          { label: 'Managed Detection and Response', to: '/services/mdr', desc: '24/7 expert MDR across your estate' },
          { label: 'Threat Hunting', to: '/services/threat-hunting', desc: 'World-class expertise and threat intelligence' },
          { label: 'Wayfinder TDR', to: '/services/wayfinder', desc: 'Threat detection and response services' },
        ],
      },
    ],
  },
  {
    label: 'Partners',
    columns: [
      {
        title: 'Partner Programs',
        links: [
          { label: 'Become a Partner', to: '/partners' },
          { label: 'MSSP Solutions', to: '/partners/mssp' },
          { label: 'Technology Alliance', to: '/partners/alliance' },
        ],
      },
    ],
  },
  {
    label: 'Why Neltecho',
    columns: [
      {
        title: 'The Neltecho Difference',
        links: [
          { label: 'Why Neltecho', to: '/company/why' },
          { label: 'Our Customers', to: '/company/customers' },
          { label: 'Industry Recognition', to: '/company/recognition' },
          { label: 'Compare', to: '/company/compare' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        title: 'Learn',
        links: [
          { label: 'Resource Center', to: '/resources' },
          { label: 'Webinars', to: '/resources/webinars' },
          { label: 'Cybersecurity Blog', to: '/blog' },
          { label: 'Events', to: '/resources/events' },
          { label: 'Newsroom', to: '/company/newsroom' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Neltecho', to: '/company/about' },
          { label: 'Leadership', to: '/company/leadership' },
          { label: 'Careers', to: '/careers' },
          { label: 'FAQ', to: '/company/faq' },
        ],
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
]

export const trustLogos = [
  { name: 'NVIDIA', src: 'images/logos/nvidia.svg', w: 62, h: 50 },
  { name: 'Cisco', src: 'images/logos/cisco.svg', w: 72, h: 50 },
  { name: 'Motorola', src: 'images/logos/motorola.svg', w: 296, h: 50 },
  { name: 'Mastercard', src: 'images/logos/mastercard.svg', w: 59, h: 50 },
  { name: 'S&P Global', src: 'images/logos/sp-global.svg', w: 120, h: 50 },
  { name: "Moody's", src: 'images/logos/moodys.svg', w: 135, h: 50 },
  { name: 'Abbott', src: 'images/logos/abbott.svg', w: 136, h: 50 },
  { name: 'Lockheed Martin', src: 'images/logos/lockheed.svg', w: 207, h: 50 },
  { name: 'Warner Bros', src: 'images/logos/warner.svg', w: 197, h: 50 },
  { name: 'DoorDash', src: 'images/logos/doordash.svg', w: 154, h: 50 },
  { name: "Macy's", src: 'images/logos/macys.svg', w: 147, h: 50 },
  { name: 'Ace Hardware', src: 'images/logos/ace.svg', w: 65, h: 50 },
  { name: 'Southern Company', src: 'images/logos/southern.svg', w: 234, h: 50 },
  { name: 'Dominion Energy', src: 'images/logos/dominion.svg', w: 118, h: 50 },
  { name: 'Oxy', src: 'images/logos/oxy.svg', w: 50, h: 50 },
  { name: 'AT&T', src: 'images/logos/att.svg', w: 97, h: 50 },
  { name: 'Norfolk Southern', src: 'images/logos/norfolk.svg', w: 146, h: 50 },
  { name: 'CSX', src: 'images/logos/csx.svg', w: 77, h: 50 },
  { name: 'Aston Martin', src: 'images/logos/aramco.svg', w: 67, h: 50 },
  { name: 'Warriors', src: 'images/logos/gsw.svg', w: 37, h: 50 },
]

export const platformTabs = [
  {
    id: 'endpoint',
    label: 'Endpoint & Identity Security',
    title: 'Protect Every Device. Secure Every Identity.',
    body: 'Autonomously stop supply chain, ransomware, behavioral attacks, and credential misuse with AI-native endpoint and identity protection unified in a single lightweight agent.',
    image: 'images/platform/endpoint.webp',
    points: [
      'Stop threats at machine speed with behavioral AI',
      'Detect and disrupt identity-based attacks in real time',
      'Real-time, AI-automated response and remediation',
      'Deploy in SaaS, on-premises, hybrid, and air-gapped environments',
    ],
    primary: { label: 'Explore Endpoint Security', to: '/products/endpoint' },
    secondary: { label: 'See Nelte Identity', to: '/products/identity' },
  },
  {
    id: 'ai',
    label: 'Securing AI',
    title: 'Defend the AI Your Business Relies On.',
    body: 'Secure AI tools, models, and agentic workflows without slowing innovation. Visibility and control across the AI attack surface.',
    image: 'images/platform/ai.webp',
    points: [
      'Discover shadow AI across the enterprise',
      'Guard prompts, models, and agent actions',
      'Stop data leakage from generative tools',
      'Align AI adoption with security policy',
    ],
    primary: { label: 'Explore AI Security', to: '/products/ai-security' },
    secondary: { label: 'See It in Action', to: '/demos' },
  },
  {
    id: 'cloud',
    label: 'Cloud Security',
    title: 'Secure Cloud Workloads End to End.',
    body: 'CNAPP capabilities that unify posture, workload, and runtime protection so cloud risk never outruns your team.',
    image: 'images/platform/cloud.webp',
    points: [
      'Prioritize exploitable cloud risk',
      'Protect containers and serverless at runtime',
      'Correlate cloud signals with endpoint and identity',
      'Automate remediation across multi-cloud',
    ],
    primary: { label: 'Explore Cloud Security', to: '/products/cloud' },
    secondary: { label: 'See It in Action', to: '/demos' },
  },
  {
    id: 'soc',
    label: 'Autonomous SOC',
    title: 'Give Every Analyst Machine-Speed Advantage.',
    body: 'Nelte AI and agentic workflows handle triage, correlation, and routine response so analysts focus on higher-value decisions.',
    image: 'images/platform/soc.webp',
    points: [
      'Autonomous alert triage and enrichment',
      'Natural language investigation with Nelte AI',
      'Cross-domain correlation in one console',
      'Fewer tickets, faster meaningful outcomes',
    ],
    primary: { label: 'Explore Autonomous SOC', to: '/products/autonomous-soc' },
    secondary: { label: 'Get a Demo', to: '/demos' },
  },
  {
    id: 'services',
    label: 'Global Services',
    title: 'Expert Defense When You Need It Most.',
    body: 'Extend your team with managed detection, hunting, and response backed by Neltecho threat intelligence.',
    image: 'images/platform/services.webp',
    points: [
      '24/7 MDR coverage across your estate',
      'Proactive hunting with NelteLABS intel',
      'Rapid incident response retainers',
      'Operational guidance from day one',
    ],
    primary: { label: 'Explore Services', to: '/services/mdr' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
]

export const recognition = [
  {
    title: 'A Leader. Six Years Running.',
    body: 'For the sixth consecutive year, Neltecho is named a Leader in the 2026 Gartner® Magic Quadrant™ for Endpoint Protection Platforms.',
    image: 'images/recognition/gartner.webp',
    cta: 'See Industry Recognition',
    to: '/company/recognition',
  },
  {
    title: 'A Leader in Modern Endpoint Security',
    body: 'Neltecho was named a Leader in the 2026 IDC MarketScape for Worldwide Modern Endpoint Security for Enterprises.',
    image: 'images/recognition/idc.webp',
    cta: 'Get the IDC MarketScape Excerpt',
    to: '/resources/idc-marketscape',
  },
  {
    title: 'Latio 2026 SOC Platform Leader',
    body: 'Neltecho has been named SOC Platform Leader in the 2026 Latio Security Market Report.',
    image: 'images/recognition/latio.webp',
    cta: 'Read the Report',
    to: '/resources/latio-2026',
  },
]

export const differenceMedia = {
  src: 'images/platform/media-container.webp',
  alt: 'Neltecho Nexus Platform interface with neon platform visualization, orb, labeled sections, and Wayfinder sidebar',
}

export const difference = [
  {
    label: 'Autonomous Cybersecurity',
    title: 'Protection That Moves at Machine Speed',
    body: 'Detect, contain, and respond to threats in real time with AI-native protection. AI that does more than protect your business. It protects the AI your business relies on.',
  },
  {
    label: 'Human Amplification',
    title: 'Less Noise. More Impact from Every Analyst',
    body: 'Nelte AI and agentic workflows handle triage, correlation, and routine response so analysts can focus on higher-value decisions.',
  },
  {
    label: 'Intuitive by Design',
    title: 'Faster Decisions. Simpler Operations.',
    body: 'A unified experience that brings visibility, investigation, and action together in a single console so your team can move faster with less friction.',
  },
]

export const solutions = [
  {
    title: 'Secure Every Attack Surface',
    body: 'Reduce risk and stop attacks across AI tools, endpoints, identity, and cloud before they escalate.',
    image: 'images/solutions/attack-surface.webp',
    ornament: 'images/solutions/ornament-endpoint.webp',
    cta: 'Explore Threat Protection',
    to: '/solutions/ransomware',
  },
  {
    title: 'Protect What Your Industry Demands',
    body: 'Discover solutions tailored to the regulatory, operational, and threat realities of your sector.',
    image: 'images/solutions/industry.webp',
    ornament: 'images/solutions/ornament-cloud.webp',
    cta: 'Explore Industries',
    to: '/industries',
  },
  {
    title: 'Accelerate Security Operations',
    body: 'Cut through noise, accelerate investigation and response, and maximize the impact of every analyst.',
    image: 'images/solutions/secops.webp',
    ornament: 'images/solutions/ornament-ai.webp',
    cta: 'Explore SecOps Solutions',
    to: '/solutions/soc',
  },
  {
    title: 'Enable Innovation Without Risk',
    body: 'Fewer tools, faster compliance, and the freedom to grow without adding operational drag.',
    image: 'images/solutions/innovation.webp',
    ornament: 'images/solutions/ornament-cloud.webp',
    cta: 'Explore Business Transformation',
    to: '/solutions/transformation',
  },
]

export const latest = [
  {
    type: 'Webinar',
    title: 'Black October: Situation Briefing, Corrective Measures, and Indicators of Compromise',
    image: 'images/latest/webinar.jpg',
    cta: 'Register Here',
    to: '/resources/black-october',
  },
  {
    type: 'Report',
    title: 'The Neltecho Annual Threat Report',
    image: 'images/latest/threat-report.webp',
    cta: 'Read Report',
    to: '/resources/threat-report',
  },
  {
    type: 'Report',
    title: 'Magic Quadrant™ Leader, Six Years in a Row',
    image: 'images/latest/magic-quadrant.webp',
    cta: 'Read Report',
    to: '/company/recognition',
  },
]

export const stories = [
  {
    quote: 'Neltecho is our defense so we can focus on our offense.',
    name: 'Brian Fulmer',
    role: 'Senior Director of IT, Golden State Warriors',
    image: 'images/stories/gsw.webp',
  },
  {
    quote: 'Neltecho has changed the way we do cybersecurity.',
    name: 'Tony Tufte',
    role: 'IT Support Specialist, Norwegian Airlines',
    image: 'images/stories/norwegian.webp',
  },
  {
    quote: 'Neltecho was really like a self-driving car. It aided the team to do bigger and better things.',
    name: 'Steve O’Connor',
    role: 'Director of IT, Aston Martin Lagonda LTD',
    image: 'images/stories/astonmartin.webp',
  },
]

export const ratings = [
  { value: '4.9/5', label: 'Most Awarded CNAPP on G2' },
  { value: '99%', label: 'Recommend Neltecho for Cloud Security' },
  { value: '4.7/5', label: 'Highly Rated' },
]

export const resources = [
  {
    type: 'Blog',
    title: 'Frontier AI Reinforces the Future of Modern Cyber Defense',
    image: 'images/resources/blog-1.webp',
    cta: 'Get the Full Story',
    to: '/resources/frontier-ai',
  },
  {
    type: 'NelteLABS',
    title: 'Threat Research for Modern Defenders',
    image: 'images/resources/labs.webp',
    cta: 'Get the Insights',
    to: '/resources/threat-research',
  },
  {
    type: 'Webinar',
    title: 'Cyber Forum: AI & Automation',
    image: 'images/resources/webinar.webp',
    cta: 'Watch Now',
    to: '/resources/cyber-forum',
  },
  {
    type: 'Blog',
    title: 'Hypersonic Supply Chain Attacks: One Solution That Didn’t Need to Know the Payload',
    image: 'images/resources/blog-2.webp',
    cta: 'Read More',
    to: '/resources/supply-chain',
  },
]

export const products = [
  {
    slug: 'nexus',
    name: 'Nexus™ Platform',
    summary: 'Unified enterprise security with machine-speed protection, intelligence, and response.',
    body: 'Nexus brings endpoint, identity, cloud, and AI security into one AI-native platform so defenders stay ahead of attackers operating at machine speed.',
  },
  {
    slug: 'endpoint',
    name: 'Endpoint Security',
    summary: 'Behavioral AI that stops ransomware, supply chain, and fileless attacks autonomously.',
    body: 'A single lightweight agent delivers prevention, detection, and automated remediation across Windows, macOS, Linux, and legacy estates.',
  },
  {
    slug: 'identity',
    name: 'Identity Security',
    summary: 'Detect and disrupt identity-based attacks in real time.',
    body: 'Close the gap between endpoint and identity by correlating credential misuse, lateral movement, and privilege abuse as it happens.',
  },
  {
    slug: 'cloud',
    name: 'Cloud Security',
    summary: 'CNAPP that prioritizes exploitable risk and protects runtime.',
    body: 'Unify posture management, workload protection, and cloud detection so multi-cloud environments stay resilient.',
  },
  {
    slug: 'ai-security',
    name: 'AI Security',
    summary: 'Secure AI tools, models, and agentic workflows.',
    body: 'Gain visibility into AI usage, enforce policy, and protect sensitive data as generative AI becomes part of everyday work.',
  },
  {
    slug: 'autonomous-soc',
    name: 'Autonomous SOC',
    summary: 'Agentic workflows that multiply analyst impact.',
    body: 'Nelte AI triages, correlates, and guides response so security teams spend less time on noise and more time on decisions that matter.',
  },
  {
    slug: 'xdr',
    name: 'XDR',
    summary: 'Cross-domain detection and response in one console.',
    body: 'Correlate signals across endpoint, identity, cloud, and network to accelerate investigation and decisive action.',
  },
]

export const solutionPages = [
  {
    slug: 'ransomware',
    name: 'Ransomware Protection',
    summary: 'Stop ransomware before encryption and roll back damage automatically.',
  },
  {
    slug: 'supply-chain',
    name: 'Supply Chain Defense',
    summary: 'Behavioral AI that does not need to know the payload to stop the attack.',
  },
  {
    slug: 'identity-threats',
    name: 'Identity Threat Defense',
    summary: 'Disrupt credential theft, privilege abuse, and lateral movement.',
  },
  {
    slug: 'soc',
    name: 'SOC Acceleration',
    summary: 'Cut noise and accelerate investigation with autonomous workflows.',
  },
  {
    slug: 'threat-hunting',
    name: 'Threat Hunting',
    summary: 'Proactive hunting powered by NelteLABS intelligence.',
  },
  {
    slug: 'incident-response',
    name: 'Incident Response',
    summary: 'Contain and recover faster with guided, automated response.',
  },
  {
    slug: 'transformation',
    name: 'Business Transformation',
    summary: 'Fewer tools, faster compliance, secure innovation.',
  },
]

export const industries = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    summary: 'Protect patient data and clinical operations without disrupting care.',
  },
  {
    slug: 'financial',
    name: 'Financial Services',
    summary: 'Defend high-value assets and meet rigorous regulatory demands.',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Secure IT and OT convergence across global production environments.',
  },
  {
    slug: 'retail',
    name: 'Retail',
    summary: 'Keep commerce running while stopping fraud and ransomware.',
  },
  {
    slug: 'government',
    name: 'Government',
    summary: 'Mission-ready protection for public sector environments.',
  },
]

export const services = [
  {
    slug: 'mdr',
    name: 'Managed Detection and Response',
    summary: '24/7 expert MDR across your estate.',
  },
  {
    slug: 'threat-hunting',
    name: 'Threat Hunting Services',
    summary: 'World-class expertise and threat intelligence.',
  },
  {
    slug: 'wayfinder',
    name: 'Wayfinder Threat Detection and Response',
    summary: 'Managed services that extend your security team.',
  },
]

export const articles = [
  {
    slug: 'php2shell',
    type: 'Blog',
    title: 'Stopping PHP2Shell: How Neltecho Protects Customers',
    summary: 'How Neltecho behavioral AI detects and stops this attack technique.',
  },
  {
    slug: 'frontier-ai',
    type: 'Blog',
    title: 'Frontier AI Reinforces the Future of Modern Cyber Defense',
    summary: 'Why AI-native defense is required for the next era of threats.',
  },
  {
    slug: 'threat-research',
    type: 'Research',
    title: 'Threat Research for Modern Defenders',
    summary: 'Insights from NelteLABS for security teams under pressure.',
  },
  {
    slug: 'cyber-forum',
    type: 'Webinar',
    title: 'Cyber Forum: AI & Automation',
    summary: 'Watch practitioners discuss AI-driven security operations.',
  },
  {
    slug: 'supply-chain',
    type: 'Blog',
    title: 'Hypersonic Supply Chain Attacks',
    summary: 'One solution that did not need to know the payload.',
  },
  {
    slug: 'threat-report',
    type: 'Report',
    title: 'The Neltecho Annual Threat Report',
    summary: 'A year of adversary behavior, trends, and defensive lessons.',
  },
  {
    slug: 'black-october',
    type: 'Webinar',
    title: 'Black October Situation Briefing',
    summary: 'Corrective measures and indicators of compromise.',
  },
  {
    slug: 'idc-marketscape',
    type: 'Report',
    title: 'IDC MarketScape Excerpt',
    summary: 'Why Neltecho is recognized as a Leader in modern endpoint security.',
  },
  {
    slug: 'latio-2026',
    type: 'Report',
    title: 'Latio 2026 SOC Platform Leader',
    summary: 'Independent recognition for Neltecho SOC platform capabilities.',
  },
]

export const blogCategories = [
  'All Categories',
  'All Things AI',
  'Cloud',
  'Company',
  'Data Platform',
  'Endpoint',
]

export const blogPosts = [
  {
    slug: 'good-bad-ugly-week-45',
    category: 'Company',
    date: 'Nov 7, 2026',
    title: 'The Good, the Bad and the Ugly in Cybersecurity — Week 45',
    summary:
      'Authorities dismantle investment scams and cybercrime networks, scammers abuse Teams and AD CS, and cyberattacks disrupt European refrigeration systems.',
    image: 'images/resources/blog-1.webp',
    featured: true,
  },
  {
    slug: 'node2shell',
    category: 'Company',
    date: 'Oct 30, 2026',
    title: 'Stopping Node2Shell: How Neltecho Protects Customers From Brotli-Based RCE',
    summary:
      'How a Brotli decoder vulnerability enables remote code execution across Node.js, Bun, and .NET — and how Neltecho mitigates the risk.',
    image: 'images/resources/blog-2.webp',
    featured: true,
  },
  {
    slug: 'php2shell',
    category: 'Company',
    date: 'Oct 21, 2026',
    title: 'Stopping PHP2SHELL: How Neltecho Protects Customers From This Attack Technique',
    summary:
      'Stop PHP2Shell with Neltecho. Learn how the agent stops web worker post-exploitation, kills process trees, and hunts threats.',
    image: 'images/resources/labs.webp',
    featured: true,
  },
  {
    slug: 'byovd-trust-gap',
    category: 'Company',
    date: 'Oct 19, 2026',
    title: 'Bring Your Own Vulnerable Driver: The Trust Gap Attackers Operate Inside',
    summary:
      'Uncover how BYOVD attacks exploit signing trust over disposable drivers, and why certificate revocation matters for endpoint defense.',
    image: 'images/resources/webinar.webp',
    featured: true,
  },
  {
    slug: 'byovd-hunt',
    category: 'Company',
    date: 'Oct 13, 2026',
    title: 'Bring Your Own Vulnerable Driver: What Detection Teams Should Actually Hunt',
    summary: 'Practical hunting guidance for detection teams facing BYOVD and EDR-killer tooling.',
    image: 'images/resources/blog-1.webp',
  },
  {
    slug: 'threatops-5-years',
    category: 'Company',
    date: 'Oct 9, 2026',
    title: '5 Years of Neltecho ThreatOps: Defense from the Ground Up',
    summary: 'How ThreatOps scaled from ground-level defense to global threat championships.',
    image: 'images/resources/blog-2.webp',
  },
  {
    slug: 'agents-from-evaluation',
    category: 'All Things AI',
    date: 'Sep 29, 2026',
    title: 'Building Agents Backwards from Evaluation',
    summary: 'Why evaluation-first agent design is the only way to ship reliable AI into the SOC.',
    image: 'images/resources/labs.webp',
  },
  {
    slug: 'nvidia-ai-governance',
    category: 'All Things AI',
    date: 'Sep 28, 2026',
    title: 'Neltecho and NVIDIA: Governing AI From Silicon to Runtime',
    summary:
      'Effective AI governance demands tamperproof, hardware-rooted security controls agents cannot bypass.',
    image: 'images/resources/webinar.webp',
  },
  {
    slug: 'soc-cant-run-on-vibes',
    category: 'All Things AI',
    date: 'Sep 15, 2026',
    title: "Why the SOC Can't Run on Vibes",
    summary: 'Evaluate the buy, build-with, and DIY spectrum for AI in the SOC.',
    image: 'images/resources/blog-1.webp',
  },
  {
    slug: 'soc-new-capability',
    category: 'Company',
    date: 'Sep 11, 2026',
    title: 'The SOC Just Gained a Capability It Never Had',
    summary: 'Agentic investigation is the shift your SOC could never staff — here is how it fits together.',
    image: 'images/resources/blog-2.webp',
  },
  {
    slug: 'edge-infrastructure',
    category: 'Cloud',
    date: 'Aug 26, 2026',
    title: 'Edge Infrastructure Under Siege',
    summary: 'What two independent datasets reveal about who is exploiting your perimeter.',
    image: 'images/resources/labs.webp',
  },
  {
    slug: 'frontier-ai',
    category: 'All Things AI',
    date: 'Aug 12, 2026',
    title: 'Frontier AI Reinforces the Future of Modern Cyber Defense',
    summary: 'Why AI-native defense is required for the next era of threats.',
    image: 'images/resources/webinar.webp',
  },
]

export const careerPillars = [
  {
    title: 'Drive Innovation',
    body: 'We have the best people, building the best tech. Together, we are redefining cybersecurity by pushing the boundaries of technology.',
  },
  {
    title: 'Build Your Future',
    body: 'Joining our team is a life-changing career opportunity — with industry-leading compensation, benefits, and tools to grow.',
  },
  {
    title: 'Work with Purpose',
    body: 'Our culture is built on equity, integrity, and autonomous action. Core values stay at the center of everything we do.',
  },
]

export const careerBenefits = [
  {
    title: 'Wellbeing',
    items: [
      'Medical, dental, and vision coverage',
      'Employee assistance program',
      'Gym reimbursement',
      'Mental health and mindfulness support',
    ],
  },
  {
    title: 'Time Away From Work',
    items: ['Unlimited Time Off', 'Grandparent Leave', 'Volunteer Time Off', 'Paid Sick Time', 'Paid Holidays'],
  },
  {
    title: 'Future Planning',
    items: [
      '16 weeks Gender-Neutral Parental Leave',
      'Restricted Stock Unit Program',
      'Flexible Spending Accounts',
      'Life Insurance',
      '401K (US)',
    ],
  },
  {
    title: 'Togetherness',
    items: [
      'Team building activities',
      'Celebrations and social gatherings',
      'Community volunteering events',
      'Global all-hands and local town halls',
    ],
  },
]

export const careerValues = [
  { title: 'Trust', body: 'Be dependable. Conduct yourself with highest integrity at all times.' },
  { title: 'Community', body: 'Be kind. Think about how your actions affect others. Achieve more together.' },
  { title: 'Accountability', body: 'Be reliable in actions and words. Put customers first. Be the owner.' },
  { title: 'Relentlessness', body: 'Act with unwavering purpose and determination in everything you do.' },
  { title: 'OneNeltecho', body: 'Be passionate about driving team success and collaboration across Neltecho.' },
  { title: 'Ingenuity', body: 'Encourage innovative approaches. Embrace diverse perspectives. Hustle.' },
]

export const openRoles = [
  { title: 'Senior Frontend Engineer', team: 'Engineering', location: 'Remote — US / EU', type: 'Full-time' },
  { title: 'Staff Security Researcher', team: 'NelteLABS', location: 'Tel Aviv / Remote', type: 'Full-time' },
  { title: 'Product Marketing Manager', team: 'Marketing', location: 'Mountain View, CA', type: 'Full-time' },
  { title: 'Customer Success Manager', team: 'Customer Success', location: 'London, UK', type: 'Full-time' },
  { title: 'AI Platform Engineer', team: 'Engineering', location: 'Remote — Global', type: 'Full-time' },
  { title: 'Threat Detection Analyst', team: 'Services', location: 'Austin, TX', type: 'Full-time' },
  { title: 'Technical Account Manager', team: 'Services', location: 'Singapore', type: 'Full-time' },
  { title: 'Software Engineering Intern', team: 'Early Career', location: 'Mountain View, CA', type: 'Internship' },
]

export const companyPages = [
  {
    slug: 'about',
    title: 'About Neltecho',
    body: 'Neltecho builds AI-native cybersecurity that gives defenders the edge back across endpoint, identity, AI, and cloud.',
  },
  {
    slug: 'why',
    title: 'Why Neltecho',
    body: 'One platform powered by Autonomous Security Intelligence. Built to stop emerging threats at machine speed.',
  },
  {
    slug: 'customers',
    title: 'Our Customers',
    body: 'Trusted by industry leaders worldwide to protect what matters most.',
  },
  {
    slug: 'recognition',
    title: 'Industry Recognition',
    body: 'Independently evaluated and repeatedly recognized as a Leader across endpoint and SOC categories.',
  },
  {
    slug: 'compare',
    title: 'Compare',
    body: 'See how Neltecho consolidates tools and outperforms legacy approaches.',
  },
  {
    slug: 'leadership',
    title: 'Leadership',
    body: 'A team of security, AI, and enterprise operators building the future of defense.',
  },
  {
    slug: 'careers',
    title: 'Careers',
    body: 'Join Neltecho and help secure the AI era.',
  },
  {
    slug: 'newsroom',
    title: 'Newsroom',
    body: 'The latest company news, product announcements, and media resources.',
  },
  {
    slug: 'faq',
    title: 'FAQ',
    body: 'Answers to common questions about the Neltecho platform, packages, and deployments.',
  },
]

export const footerColumns = [
  {
    title: 'Key Products & Solutions',
    links: [
      { label: 'Nexus Platform', to: '/products/nexus' },
      { label: 'Endpoint Security', to: '/products/endpoint' },
      { label: 'Cloud Security', to: '/products/cloud' },
      { label: 'AI Security', to: '/products/ai-security' },
      { label: 'Autonomous SOC', to: '/products/autonomous-soc' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Managed Detection and Response', to: '/services/mdr' },
      { label: 'Threat Hunting', to: '/services/threat-hunting' },
      { label: 'Wayfinder TDR', to: '/services/wayfinder' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Neltecho', to: '/company/about' },
      { label: 'Why Neltecho', to: '/company/why' },
      { label: 'Careers', to: '/careers' },
      { label: 'Newsroom', to: '/company/newsroom' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Product Tours', to: '/demos' },
      { label: 'Pricing & Packages', to: '/pricing' },
      { label: 'FAQ', to: '/company/faq' },
      { label: 'Resource Center', to: '/resources' },
      { label: 'Partners', to: '/partners' },
    ],
  },
]
