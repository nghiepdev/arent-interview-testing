'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {useSelectedLayoutSegments} from 'next/navigation';

import {Badge} from '@/components/ui';

export default function Nav() {
  const segments = useSelectedLayoutSegments();

  return (
    <div className="ml-3 mr-2 flex grow items-center justify-end overflow-hidden sm:mr-14">
      <nav
        className={clsx(
          'flex gap-x-9 gap-y-2 overflow-x-auto scrollbar-hide sm:text-base',
          '[&>a:hover]:text-primary-400 [&>a[data-active=true]]:text-primary-400 [&>a]:flex [&>a]:items-center [&>a]:gap-1 [&>a]:transition sm:[&>a]:gap-2',
          '[&>a_img]:h-[24px] [&>a_img]:object-contain sm:[&>a_img]:h-[32px]',
          '[&>a_span]:whitespace-nowrap',
        )}
      >
        <Link
          href="/account/records"
          data-active={segments[1] === 'account' && segments[2] === 'records'}
        >
          <img src="/icons/icon_memo.svg" alt="" />
          <span>自分の記録</span>
        </Link>
        <a href="#">
          <img src="/icons/icon_challenge.svg" alt="" />
          <span>チャレンジ</span>
        </a>
        <a href="#">
          <Badge count={1} className="shrink-0">
            <img src="/icons/icon_info.svg" alt="" />
          </Badge>
          <span>お知らせ</span>
        </a>
      </nav>
    </div>
  );
}
