import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'
import GridBackground from '@/components/ui/GridBackground'
import RevealGroup from '@/components/ui/RevealGroup'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ahmad Ali Masykur | Software Engineer',
  description:
    'Portfolio of Ahmad Ali Masykur, Software Engineer and Backend Engineer at Bank CIMB Niaga working on banking integrations, distributed systems, observability, and AI-powered applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <GridBackground />
        <Navbar />
        <RevealGroup className="relative z-10">
          {children}
          <Footer />
        </RevealGroup>
      </body>
    </html>
  )
}
