import Link from 'next/link';

import {Alert} from '@/components/ui';

export default function LoginLayout({children}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-[440px] max-w-full px-2 sm:px-5">
        <div className="flex justify-center">
          <Link href="/">
            <img src="/logo.svg" alt="" className="h-12" />
          </Link>
        </div>
        <h1 className="mt-8 text-center text-2xl font-semibold">
          Sign in to your account
        </h1>
        <div className="mt-8">{children}</div>
        <div className="my-4 h-px bg-dark-500/10"></div>
        <Alert>
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
