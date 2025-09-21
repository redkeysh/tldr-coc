import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://redkeysh.github.io/tldr-coc'),
  title: 'All Things Linux - Code of Conduct (TL;DR)',
  description: 'A quick, accessible summary of the All Things Linux community Code of Conduct. Learn about expected behaviors, prohibited actions, and how to report issues.',
  keywords: ['All Things Linux', 'Code of Conduct', 'Community Guidelines', 'Discord', 'Linux Community'],
  authors: [{ name: 'All Things Linux Community' }],
  creator: 'All Things Linux',
  publisher: 'All Things Linux',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'All Things Linux - Code of Conduct (TL;DR)',
    description: 'A quick, accessible summary of the All Things Linux community Code of Conduct.',
    url: 'https://redkeysh.github.io/tldr-coc',
    siteName: 'All Things Linux CoC TL;DR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'All Things Linux Code of Conduct TL;DR',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Things Linux - Code of Conduct (TL;DR)',
    description: 'A quick, accessible summary of the All Things Linux community Code of Conduct.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
