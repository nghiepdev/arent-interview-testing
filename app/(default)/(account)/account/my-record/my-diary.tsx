'use client';

import {useEffect, useRef} from 'react';

import {Diary, type DiaryType} from '@/components/diary';
import {DiarySkeleton} from '@/components/skeleton';
import {Alert, Button} from '@/components/ui';
import {useFetchMore} from '@/lib/use-fetch-more';

export default function MyDiary() {
  const [diaries, {state, page, shouldNext, initialLoading, fetchMore}] =
    useFetchMore<DiaryType>('/v1/record/diaries');

  const lastRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (page > 1 && (state === 'success' || state === 'done')) {
      lastRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [page, state]);

  return (
    <div id="my-diary" className="container">
      <h2 className="px-2 text-xl font-medium uppercase text-dark-500 sm:px-0">
        My Diary
      </h2>
      <section className="mt-1 grid gap-x-3 gap-y-3 px-2 grid-fill-[231px] sm:px-0">
        {initialLoading
          ? Array.from({length: 8}).map((_, index) => (
              <DiarySkeleton key={index} />
            ))
          : diaries.map((diary, index) => (
              <Diary key={index} ref={lastRef} {...diary} />
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
              className="min-w-[288px]"
              loading={state === 'loading'}
              onClick={() => fetchMore()}
            >
              自分の日記をもっと見る
            </Button>
          )
        )}
      </div>
    </div>
  );
}
