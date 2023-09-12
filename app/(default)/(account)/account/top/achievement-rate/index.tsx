'use client';

import Image from 'next/image';
import {lazy, Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {NoSSR} from '@/components/misc';
import {Spinner} from '@/components/ui';
import mainPhoto from '@/public/photos/main_photo.png';

const Rate = lazy(() => import('./rate'));
const Graph = lazy(() => import('./graph'));

export default function AchievementRate() {
  return (
    <div className="flex flex-col items-stretch gap-y-0 overflow-hidden sm:flex-row">
      <section className="relative w-full shrink-0 sm:w-2/5 lg:w-[540px]">
        <Image
          src={mainPhoto}
          quality={100}
          priority
          placeholder="blur"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ErrorBoundary fallback={<span />}>
            <Suspense fallback={<Spinner className="text-light" />}>
              <NoSSR>
                <Rate />
              </NoSSR>
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
      <section className="h-[316px] grow overflow-hidden bg-dark-600">
        <ErrorBoundary fallback={<span />}>
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <Spinner className="text-light" />
              </div>
            }
          >
            <NoSSR>
              <Graph />
            </NoSSR>
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
}
