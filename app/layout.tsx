import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

import { ThemeProvider } from './_components/Theme-provide';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-caption',
});

export const metadata: Metadata = {
  title: 'Campo Jean-Guillaume',
  description: 'Portfolio professionnel de Campo Jean-Guillaume',
  icons: {
    icon: '/logocampo.png', // Remplacez par le chemin de votre fichier favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' className='h-full'>
      <body className={cn(GeistSans.variable, montserrat.variable, 'font-sans h-full bg-background text-foreground ')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
