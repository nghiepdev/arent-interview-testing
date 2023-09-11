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
  description: 'A web application for health care.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, 'text-sm antialiased')}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
