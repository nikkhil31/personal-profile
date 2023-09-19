import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/core/components/GoogleAnalytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil Limbad - Freelance Full Stack Developer in India | Expert in NextJS, React, AWS, Langchain',
  description: 'Nikhil Limbad is an experienced Freelance Full Stack Developer in India, specializing in NextJS, React, AWS, and OpenAI integration. Over 4 years of experience in diverse sectors. Open for remote freelance opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <meta name="keywords" content="Nikhil Limbad, Freelance Full Stack Developer, Freelance Full Stack Developer India, Expert NextJS Developer, Experienced Full Stack Developer, React, AWS, OpenAI" />
      </head>
      <body className={inter.className}>

        <GoogleAnalytics />

        {children}
      </body>
    </html>
  )
}
