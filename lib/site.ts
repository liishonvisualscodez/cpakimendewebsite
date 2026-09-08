export const siteConfig = {
  name: 'CPA Kimende',
  tagline: 'Accounting, Audit, Tax & Business Advisory',
  phoneDisplay: '+254 722147720',
  phoneHref: '+254722147720',
  whatsappHref: '254722147720',
  email: 'cpakimende@gmail.com',
  addressLines: ['2nd Floor', 'Soi Plaza', 'Old Equity'],
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 5:30 PM' },
    { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    summary:
      'Accurate, up-to-date financial records that give you a clear view of your business at all times.',
    items: ['Bookkeeping', 'Financial records', 'Financial statements', 'Management accounts'],
  },
  {
    id: 'tax',
    title: 'Tax Services',
    summary:
      'Stay compliant with KRA while minimising your tax burden through proactive planning and expert advice.',
    items: ['Tax compliance', 'Tax returns', 'Tax advisory', 'Tax planning'],
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    summary:
      'Independent, credible assurance that strengthens confidence with regulators, lenders and stakeholders.',
    items: ['Statutory audits', 'Internal audits', 'Financial reviews', 'Assurance services'],
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    summary:
      'Practical guidance to help you grow sustainably, improve performance and make better decisions.',
    items: ['Business planning', 'Financial advisory', 'Performance analysis', 'Financial management'],
  },
  {
    id: 'payroll',
    title: 'Payroll & Compliance',
    summary:
      'Reliable payroll and statutory management that keeps your people paid and your business compliant.',
    items: ['Payroll processing', 'Statutory deductions', 'Compliance support', 'PAYE, NSSF & SHIF'],
  },
  {
    id: 'support',
    title: 'Business Support',
    summary:
      'End-to-end support to set up, structure and run your business with confidence from day one.',
    items: ['Business setup support', 'Financial systems', 'Ongoing business advisory', 'Process reviews'],
  },
]

export const industries = [
  { name: 'SMEs', description: 'Small and medium enterprises building for scale.' },
  { name: 'Startups', description: 'Early-stage ventures establishing strong financial foundations.' },
  { name: 'Corporates', description: 'Established companies with complex reporting needs.' },
  { name: 'NGOs & Non-profits', description: 'Mission-driven organisations requiring donor-grade accountability.' },
  { name: 'Professionals', description: 'Consultants and practitioners managing personal and practice finances.' },
  { name: 'Individuals', description: 'Private clients seeking clarity on tax and wealth.' },
  { name: 'Associations', description: 'Member organisations needing transparent financial governance.' },
  { name: 'Community Organisations', description: 'Groups managing shared funds and community resources.' },
]

export const process = [
  { step: '01', title: 'Consultation', description: 'We take time to understand your goals, challenges and financial needs.' },
  { step: '02', title: 'Assessment', description: 'We review your financial and business situation in detail.' },
  { step: '03', title: 'Strategy', description: 'We develop a clear, practical solution tailored to you.' },
  { step: '04', title: 'Ongoing Support', description: 'We provide continued professional assistance as you grow.' },
]

export const insights = [
  {
    category: 'Tax',
    title: 'Understanding KRA Tax Compliance for Kenyan SMEs',
    excerpt:
      'A practical guide to filing obligations, deadlines and how to avoid common penalties as a growing business.',
    readTime: '6 min read',
  },
  {
    category: 'Accounting',
    title: 'Why Clean Bookkeeping Is the Foundation of Growth',
    excerpt:
      'How accurate financial records help you access financing, plan confidently and make better decisions.',
    readTime: '5 min read',
  },
  {
    category: 'Business Advisory',
    title: 'Preparing Your Business for a Statutory Audit',
    excerpt:
      'Steps to get audit-ready, reduce disruption and turn assurance into a genuine business advantage.',
    readTime: '7 min read',
  },
  {
    category: 'SME Finance',
    title: 'Managing Cash Flow in a Challenging Economy',
    excerpt:
      'Proven approaches to protect liquidity, control costs and keep your business resilient through uncertainty.',
    readTime: '5 min read',
  },
]
