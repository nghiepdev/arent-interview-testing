'use client';

import {useCallback, useEffect, useState} from 'react';

import {apiCaller} from '@/lib/api-caller';

type State = 'idle' | 'loading' | 'error' | 'success' | 'done';

export function useFetchMore<D>(url: string) {
  const [page, setPage] = useState(1);
  const [state, setState] = useState<State>('idle');
  const [allData, setData] = useState<D[]>([]);

  const shouldNext =
    state !== 'idle' &&
    (state === 'error' || state !== 'done') &&
    allData.length > 0;

  const initialLoading =
    state === 'idle' || (state === 'loading' && allData.length === 0);

  const fetchData = useCallback(async () => {
    setState('loading');
    try {
      const {data} = await apiCaller.get<{
        data: D[];
        nextPage?: boolean;
      }>(url, {
        params: {
          page,
        },
      });
      setState(data.nextPage ? 'success' : 'done');
      setData(prev => [...prev, ...data.data]);
    } catch {
      setState('error');
    }
  }, [page, url]);

  const fetchMore = useCallback(() => {
    if (state === 'success') {
      setPage(page => page + 1);
    }
  }, [state]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [
    allData,
    {state, page, initialLoading, shouldNext, fetchMore},
  ] as const;
}
