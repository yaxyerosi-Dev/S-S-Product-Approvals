import {
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  Globe2,
  Headphones,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
  accent: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const

export const stats = [
  { value: '15+', label: 'Years of expertise' },
  { value: '40+', label: 'Markets supported' },
  { value: '98%', label: 'First-pass success' },
  { value: '24/7', label: 'Project support' },
] as const

export const services: Service[] = [
  {
    title: 'Product Certification',
    description:
      'End-to-end guidance for CE, UKCA, FCC, and global conformity marks so your products launch on schedule.',
    icon: BadgeCheck,
    accent: 'from-sky-400/20 to-sky-100',
  },
  {
    title: 'Compliance Strategy',
    description:
      'Early-stage regulatory roadmaps that align design, testing, and documentation before costly rework.',
    icon: ShieldCheck,
    accent: 'from-navy-900/10 to-sky-100',
  },
  {
    title: 'Technical Documentation',
    description:
      'Clear, audit-ready dossiers—risk assessments, declarations, and labels built to authority expectations.',
    icon: FileSearch,
    accent: 'from-warm to-sky-100',
  },
  {
    title: 'Testing Coordination',
    description:
      'We partner with accredited labs worldwide and manage timelines, samples, and retest cycles for you.',
    icon: ClipboardCheck,
    accent: 'from-sky-400/15 to-white',
  },
  {
    title: 'Global Market Access',
    description:
      'Multi-region approval programs with one accountable team—from North America to EU, UK, and beyond.',
    icon: Globe2,
    accent: 'from-navy-900/8 to-sky-100',
  },
  {
    title: 'Dedicated Support',
    description:
      'Responsive engineers who speak your language—plain updates, fast answers, and hands-on problem solving.',
    icon: Headphones,
    accent: 'from-sky-100 to-white',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn your product, target markets, and launch timeline—then map the exact approvals you need.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'A tailored compliance plan covers standards, tests, documentation, and critical milestones.',
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'We coordinate testing, prepare submissions, and keep every stakeholder aligned and informed.',
  },
  {
    step: '04',
    title: 'Approve & Launch',
    description:
      'Certificates in hand, you ship with confidence—and we stay available for renewals and variants.',
  },
]

export const company = {
  name: 'S&S Product Approvals',
  shortName: 'S&S',
  tagline: 'Engineering Compliance & Certification Support',
  email: 'hello@ssproductapprovals.com',
  phone: '+1 (555) 012-3456',
  location: 'Global support · Remote & on-site',
  about: [
    'S&S Product Approvals helps manufacturers navigate complex regulatory landscapes with clarity and care. We combine deep engineering knowledge with a friendly, partnership-first approach—because compliance should feel manageable, not mysterious.',
    'From first prototype to serial production, our team stays beside you: interpreting standards, preparing documentation, and accelerating time-to-market without cutting corners on safety or quality.',
  ],
} as const
