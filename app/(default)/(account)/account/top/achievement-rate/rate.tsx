'use client';

import dayjs from 'dayjs';
import {suspend} from 'suspend-react';

import {PercentCircle} from '@/components/ui';
import {apiCaller} from '@/lib/apiCaller';

export default function Rate() {
  const {rate, date} = suspend(async () => {
    const {data} = await apiCaller.get<{rate: number; date: string}>(
      '/v1/top/rate',
    );
    return data;
  }, []);

  return (
    <PercentCircle
      size={181 + 20}
      progress={rate}
      circleColor="transparent"
      progressColor="white"
      progressShape="square"
      progressWidth={3}
      filter="drop-shadow(0px 0px 1px red)"
      renderText={progress => (
        <div
          className="whitespace-nowrap text-light"
          style={{
            textShadow: '0px 0px 6px #FCA500',
          }}
        >
          <span className="text-lg">{dayjs(date).format('MM/DD')}</span>{' '}
          <span className="text-2xl">{progress}%</span>
        </div>
      )}
    />
  );
}
