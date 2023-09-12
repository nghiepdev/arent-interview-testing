'use client';

import {useEffect, useRef} from 'react';

import {Blog, type BlogType} from '@/components/blog';
import {BlogSkeleton} from '@/components/skeleton';
import {Alert, Button} from '@/components/ui';
import {useFetchMore} from '@/lib/use-fetch-more';

export default function BlogSecton() {
  const [blogs, {state, page, shouldNext, initialLoading, fetchMore}] =
    useFetchMore<BlogType>('/v1/column/blogs');

  const lastRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (page > 1 && (state === 'success' || state === 'done')) {
      lastRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [page, state]);

  return (
    <div className="container">
      <section className="grid gap-x-2 gap-y-5 px-2 grid-fill-[234px] sm:px-0">
        {initialLoading
          ? Array.from({length: 8}).map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          : blogs.map((blog, index) => (
              <Blog key={index} ref={lastRef} {...blog} />
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
              コラムをもっと見る
            </Button>
          )
        )}
      </div>
    </div>
  );
}
