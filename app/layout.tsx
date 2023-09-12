import './globals.css';

import clsx from 'clsx';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import Provider from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Healthy',
    template: '%s | Healthy',
  },
  description: 'Your healthy life grow here.',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#FFCC21',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#FFCC21',
    },
  ],
  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({children}: AppLayoutProps) {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, 'text-sm antialiased')}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
