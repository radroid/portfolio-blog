import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { Diagnostics } from './components/diagnostics'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Generalist Builder | Engineering + Product + Businesses',
    template: '%s | Generalist Builder',
  },
  description: 'I build experiences—both digital and physical. Engineering background. Founder at ARK Expereinces.',
  openGraph: {
    title: 'Generalist Builder | Engineering + Product + Businesses',
    description: 'I build experiences—both digital and physical. Engineering background. Founder at ARK Expereinces.',
    url: baseUrl,
    siteName: 'Generalist Builder',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen">
        <main className="flex-auto min-w-0 flex flex-col">
          <Diagnostics />
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
            <Navbar />
            {children}
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
