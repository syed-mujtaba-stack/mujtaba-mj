import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Chatbot from '@/components/chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mujtaba-110.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Syed Mujtaba Abbas Zaidi | Full-Stack Developer',
    template: `%s | Syed Mujtaba Abbas Zaidi`,
  },
  description:
    'A self-driven Full-Stack Developer with a strong passion for building intelligent, scalable web apps and AI-powered tools.',
  keywords: [
    'Full-Stack Developer',
    'AI Tools',
    'Next.js',
    'React',
    'TypeScript',
    'Syed Mujtaba Abbas Zaidi',
    'Portfolio',
  ],
  authors: [{ name: 'Syed Mujtaba Abbas Zaidi', url: siteUrl }],
  creator: 'Syed Mujtaba Abbas Zaidi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Syed Mujtaba Abbas Zaidi | Full-Stack Developer',
    description:
      'Explore the portfolio of Syed Mujtaba Abbas Zaidi, a creative technologist building modern web applications and AI tools.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Syed Mujtaba Abbas Zaidi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Mujtaba Abbas Zaidi | Full-Stack Developer',
    description:
      'Explore the portfolio of Syed Mujtaba Abbas Zaidi, a creative technologist building modern web applications and AI tools.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@syedmujtaba',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

          <meta name="google-site-verification" content="1fO9SPiqvxF11Mi7u2hIHqTyXyghUVqj6xjCx0svCqM" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-dvh bg-background', inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
