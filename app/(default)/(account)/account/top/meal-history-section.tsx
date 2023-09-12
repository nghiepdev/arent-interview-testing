'use client';

import {useEffect, useRef} from 'react';

import {MealHistory, type MealHistoryType} from '@/components/meal';
import {MealSkeleton} from '@/components/skeleton';
import {Alert, Button} from '@/components/ui';
import {useFetchMore} from '@/lib/use-fetch-more';

export default function MealHistorySecton() {
  const [meals, {state, page, shouldNext, initialLoading, fetchMore}] =
    useFetchMore<MealHistoryType>('/v1/top/meals');

  const lastRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (page > 1 && (state === 'success' || state === 'done')) {
      lastRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [page, state]);

  return (
    <div className="container">
      <section className="grid gap-2 px-2 grid-fill-[234px] sm:px-0">
        {initialLoading
          ? Array.from({length: 8}).map((_, index) => (
              <MealSkeleton key={index} />
            ))
          : meals.map((meal, index) => (
              <MealHistory key={index} ref={lastRef} {...meal} />
            ))}
      </section>
      <div className="mt-7 flex justify-center">
        {state === 'error' ? (
          <Alert>Sorry, Someting went wrong. Please try again</Alert>
        ) : (
          shouldNext && (
            <Button
              color="gradient"
              rounded="md"
              size="lg"
              className="min-w-[296px]"
              loading={state === 'loading'}
              onClick={() => fetchMore()}
            >
              記録をもっと見る
            </Button>
          )
        )}
      </div>
    </div>
  );
}
