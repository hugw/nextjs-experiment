import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { APP_DESC, APP_TITLE } from '@/config'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESC,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
