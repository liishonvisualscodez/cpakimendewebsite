import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Caslon_Text } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caslon',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cpakimende.co.ke'),
  title: {
    default: 'CPA Kimende | Accounting, Audit, Tax & Business Advisory in Kenya',
    template: '%s | CPA Kimende',
  },
  description:
    'CPA Kimende is a Kenyan professional services firm providing accounting, bookkeeping, tax, audit, payroll and business advisory services to SMEs, corporates, NGOs and individuals. Book a consultation today.',
  keywords: [
    'CPA Kimende',
    'accounting firm Kenya',
    'audit services Nairobi',
    'tax advisory Kenya',
    'bookkeeping Kenya',
    'business advisory Kenya',
    'payroll services Kenya',
    'CPA Kenya',
  ],
  authors: [{ name: 'CPA Kimende' }],
  openGraph: {
    title: 'CPA Kimende | Accounting, Audit, Tax & Business Advisory',
    description:
      'Professional accounting, tax, audit and business advisory services you can trust. Serving SMEs, corporates, NGOs and individuals across Kenya.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'CPA Kimende',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1b2436',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caslon.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
