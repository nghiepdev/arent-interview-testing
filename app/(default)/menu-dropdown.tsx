'use client';

import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname, useSelectedLayoutSegments} from 'next/navigation';

export default function MenuDropdown() {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  return (
    <div className="shrink-0 self-center">
      <Popover.Root key={pathname}>
        <Popover.Trigger asChild>
          <button
            aria-label="menu"
            className="[&[data-state=closed]_[data-closed]]:block [&[data-state=closed]_[data-open]]:hidden [&[data-state=open]_[data-closed]]:hidden [&[data-state=open]_[data-open]]:block"
          >
            <img
              src="/icons/icon_menu.svg"
              alt=""
              className="h-[24px] object-contain sm:h-[32px]"
              data-closed
            />
            <img
              src="/icons/icon_close.svg"
              alt=""
              className="h-[24px] object-contain sm:h-[32px]"
              data-open
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content align="end" sideOffset={10} className="z-50">
            <nav
              className={clsx(
                'flex w-[230px] max-w-full flex-col text-light sm:w-[280px] sm:text-base',
                '[&>a[data-active=true]]:text-primary-400 [&>a]:block [&>a]:truncate [&>a]:border-b-2 [&>a]:border-t [&>a]:border-b-dark-600/10 [&>a]:border-t-light/10 [&>a]:bg-gray-400 [&>a]:px-3 [&>a]:py-3 sm:[&>a]:px-7 sm:[&>a]:py-5',
                'transition [&>a:hover]:text-primary-400',
              )}
            >
              <Link
                href="/account/my-record"
                data-active={
                  segments[1] === 'account' && segments[2] === 'my-record'
                }
              >
                自分の記録
              </Link>
              <a href="#">体重グラフ</a>
              <a href="#">目標</a>
              <a href="#">選択中のコース</a>
              <Link href="/columns" data-active={segments[0] === 'columns'}>
                コラム一覧
              </Link>
              <a href="#">設定</a>
            </nav>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
