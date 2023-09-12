'use client';

import dayjs from 'dayjs';
import {lazy, Suspense, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {NoSSR} from '@/components/misc';
import {Button, Spinner} from '@/components/ui';
import type {Period} from '@/lib/typings';

const Graph = lazy(() => import('./graph'));

export default function BodyRecord() {
  const [date, setDate] = useState<string | null>(null);
  const [period, setPeriod] = useState<Period>('year');

  return (
    <section id="body-record" className="container bg-dark-500 px-6 py-4">
      <h2 className="flex text-light">
        <span className="inline-block w-[96px] text-[15px] uppercase">
          Body
          <br />
          Record
        </span>
        {date && (
          <time dateTime={date} className="text-xl font-medium">
            {dayjs(date).format('YYYY.MM.DD')}
          </time>
        )}
      </h2>
      <div className="h-[200px] overflow-hidden">
        <ErrorBoundary fallback={<span />}>
          <Suspense
            fallback={
              <div className="flex h-[80%] items-center justify-center text-light">
                <Spinner />
              </div>
            }
          >
            <NoSSR>
              <Graph period={period} onDateChange={setDate} />
            </NoSSR>
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="mt-1 flex items-center gap-4 pl-2 [&>button]:min-w-[56px]">
        <Button
          size="xs"
          color={period === 'day' ? 'primary' : 'light'}
          rounded="full"
          onClick={() => setPeriod('day')}
        >
          日
        </Button>
        <Button
          size="xs"
          color={period === 'week' ? 'primary' : 'light'}
          rounded="full"
          onClick={() => setPeriod('week')}
        >
          週
        </Button>
        <Button
          size="xs"
          color={period === 'month' ? 'primary' : 'light'}
          rounded="full"
          onClick={() => setPeriod('month')}
        >
          月
        </Button>
        <Button
          size="xs"
          color={period === 'year' ? 'primary' : 'light'}
          rounded="full"
          onClick={() => setPeriod('year')}
        >
          年
        </Button>
      </div>
    </section>
  );
}
