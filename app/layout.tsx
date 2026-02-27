import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henry Burke',
  description: 'Personal portfolio of Henry Burke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
