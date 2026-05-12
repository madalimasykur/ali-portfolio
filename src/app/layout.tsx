import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import GridBackground from '@/components/ui/GridBackground'
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
    'Portfolio of Ahmad Ali Masykur, Software Engineer at Bank CIMB Niaga focusing on backend systems, distributed systems, cloud engineering, and AI.',
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
