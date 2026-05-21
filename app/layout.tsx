import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Cinzel, Lato, Scheherazade_New } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const scheherazade = Scheherazade_New({ 
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic"
});

export const metadata: Metadata = {
  title: 'Anziya & Ramees Mohammed | Luxury Muslim Wedding Invitation',
  description: 'You are cordially invited to the Marriage Reception of Anziya. A & Ramees Mohammed. A on Sunday, July 12th, 2026 at KMR Convention Center, Thenkurussi.',
  keywords: ['wedding', 'nikah', 'muslim wedding', 'invitation', 'marriage reception', 'Anziya', 'Ramees Mohammed'],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D4C3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${cormorant.variable} ${cinzel.variable} ${scheherazade.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
