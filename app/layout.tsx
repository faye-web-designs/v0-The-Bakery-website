import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

// LocalBusiness JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'The Bakery',
  description: 'Fresh-baked cinnamon rolls, savory pizzas, hand-scooped ice cream, and unique local gifts in Radcliffe, Iowa.',
  url: 'https://thebakeryradcliffe.com',
  telephone: '+1-515-899-2155',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '213 Isabella St',
    addressLocality: 'Radcliffe',
    addressRegion: 'IA',
    postalCode: '50230',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.2350,
    longitude: -93.4580,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '06:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '17:00',
      closes: '21:00',
    },
  ],
  priceRange: '$',
  servesCuisine: ['American', 'Bakery', 'Pizza', 'Ice Cream'],
  hasMenu: 'https://thebakeryradcliffe.com/menu',
  image: 'https://thebakeryradcliffe.com/images/hero-bakery.jpg',
  sameAs: [],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thebakeryradcliffe.com'),
  title: {
    default: 'The Bakery | Homemade Goodness in Radcliffe, Iowa',
    template: '%s | The Bakery',
  },
  description: 'Fresh-baked cinnamon rolls, savory pizzas, hand-scooped ice cream, and unique local gifts. Visit The Bakery at 213 Isabella St, Radcliffe, IA. Call 515-899-2155.',
  keywords: ['bakery', 'Radcliffe Iowa', 'cinnamon rolls', 'pizza', 'ice cream', 'local bakery', 'homemade baked goods', 'cupcakes', 'wedding cakes', 'catering'],
  authors: [{ name: 'The Bakery' }],
  creator: 'The Bakery',
  publisher: 'The Bakery',
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: 'The Bakery | Homemade Goodness in Radcliffe, Iowa',
    description: 'Fresh-baked cinnamon rolls, savory pizzas, hand-scooped ice cream, and unique local gifts.',
    type: 'website',
    locale: 'en_US',
    url: 'https://thebakeryradcliffe.com',
    siteName: 'The Bakery',
    images: [
      {
        url: '/images/hero-bakery.jpg',
        width: 1200,
        height: 630,
        alt: 'The Bakery - Homemade Goodness in Radcliffe, Iowa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bakery | Homemade Goodness in Radcliffe, Iowa',
    description: 'Fresh-baked cinnamon rolls, savory pizzas, hand-scooped ice cream, and unique local gifts.',
    images: ['/images/hero-bakery.jpg'],
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://thebakeryradcliffe.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B5A2B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${_geist.variable} ${_geistMono.variable} ${_playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
