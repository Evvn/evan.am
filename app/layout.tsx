import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from './_lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: 'evan.am – %s',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.personName, url: site.url }],
  creator: site.personName,
  publisher: site.personName,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [site.socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'portfolio',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#evan`,
      name: site.personName,
      alternateName: site.name,
      url: site.url,
      jobTitle: 'Offline Editor',
      email: site.email,
      homeLocation: {
        '@type': 'City',
        name: 'Tokyo',
        containedInPlace: {
          '@type': 'Country',
          name: 'Japan',
        },
      },
      sameAs: [site.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      author: {
        '@id': `${site.url}/#evan`,
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
