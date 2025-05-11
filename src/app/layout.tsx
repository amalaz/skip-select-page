import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from './QueryProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skip Hire - Choose Your Skip Size',
  description: 'Select the perfect skip size for your waste disposal needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://yozbrydxdlcxghkphhtq.supabase.co" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
} 