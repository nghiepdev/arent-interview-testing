import {decode} from 'js-base64';
import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import {Alert} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Sign-in',
};

export default function LoginLayout({children}: AppLayoutProps) {
  const accessToken = cookies().get('access_token')?.value;
  if (accessToken && decode(accessToken).includes('arent')) {
    redirect('/account/top');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-[440px] max-w-full px-2 sm:px-5">
        <div className="flex justify-center">
          <a href="/account/top" aria-label="Home page">
            <img src="/logo.svg" alt="" className="h-12" />
          </a>
        </div>
        <h1 className="mt-8 text-center text-2xl font-semibold">
          Sign in to your account
        </h1>
        <div className="mt-8">{children}</div>
        <div className="my-4 h-px bg-dark-500/10"></div>
        <Alert color="light">
          <div className="font-semibold">
            For demo testing purposes, please use the account test{' '}
            <span className="italic text-dark-500 underline">arent</span>/
            <span className="italic text-dark-500 underline">arent</span>.
          </div>
        </Alert>
      </main>
    </div>
  );
}
