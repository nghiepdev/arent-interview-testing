import clsx from 'clsx';
import Link from 'next/link';

import {BackToTop} from '@/components/misc';

import MenuDropdown from './menu-dropdown';
import Nav from './nav';

export default function DefaultLayout({children}: AppLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="h-[64px] shrink-0 bg-dark-500 text-light">
          <div className="container h-full">
            <div className="flex h-full">
              <Link href="/" className="shrink-0 self-center">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="h-[30px] object-contain sm:h-[40px]"
                />
              </Link>
              <Nav />
              <MenuDropdown />
            </div>
          </div>
        </header>
        <main className="grow">{children}</main>
        <footer className="shrink-0 bg-dark-500 text-xs text-light">
          <div className="container">
            <nav className="flex min-h-[128px] items-center px-2 py-2 sm:px-0">
              <ul
                className={clsx(
                  'flex flex-wrap items-center gap-x-[70px] gap-y-1',
                  '[&>li>a:hover]:text-primary-500 [&>li>a]:transition',
                )}
              >
                <li>
                  <a href="#">会員登録</a>
                </li>
                <li>
                  <a href="#">運営会社</a>
                </li>
                <li>
                  <a href="#">利用規約</a>
                </li>
                <li>
                  <a href="#">個人情報の取扱について</a>
                </li>
                <li>
                  <a href="#">特定商取引法に基づく表記</a>
                </li>
                <li>
                  <a href="#">お問い合わせ</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
      <BackToTop className="fixed bottom-40 right-10 z-[99999] lg:right-24 lg:top-1/2 lg:-translate-y-1/2" />
    </>
  );
}
