import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/core/components/GoogleAnalytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Experienced Full Stack Developer for Freelance Opportunities | Specializing in MERN, OpenAi APIs & More',
  description: 'Seasoned Full Stack Developer with over 4 years of experience in scalable software solutions. Specialized in React, AWS, and more. Open for freelance opportunities. Committed to delivering innovation and quality. Contact now to discuss your project needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <GoogleAnalytics />

        {children}
      </body>
    </html>
  )
}
