'use client';

import dayjs from 'dayjs';
import {lazy, Suspense, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {NoSSR} from '@/components/misc';
import {Spinner} from '@/components/ui';

const MyExerciseContent = lazy(() => import('./my-exercise'));

export default function MyExercise() {
  const [date, setDate] = useState<string | null>(null);

  return (
    <section id="my-exercise" className="container bg-dark-500 px-6 py-4">
      <h2 className="flex text-light">
        <span className="inline-block w-[96px] text-[15px] uppercase">
          Body
          <br />
          Exercise
        </span>
        {date && (
          <time dateTime={date} className="text-xl font-medium">
            {dayjs(date).format('YYYY.MM.DD')}
          </time>
        )}
      </h2>
      <div className="mt-2 h-[192px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-primary-300 scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl supports-[overflow:overlay]:[overflow-y:overlay]">
        <ErrorBoundary fallback={<span />}>
          <Suspense
            fallback={
              <div className="flex h-[80%] items-center justify-center text-light">
                <Spinner />
              </div>
            }
          >
            <NoSSR>
              <div className="gap-9 sm:columns-2">
                <MyExerciseContent onDateChange={setDate} />
              </div>
            </NoSSR>
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
}
