import dayjs from 'dayjs';
import {NextRequest, NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';
import type {Period} from '@/lib/typings';

const category = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
const mockData = [
  [200, 190, 120, 150, 165, 135, 130, 110, 90, 90, 90, 60],
  [200, 180, 170, 140, 140, 120, 95, 90, 75, 70, 80, 40],
];

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const period = (request.nextUrl.searchParams.get('period') ||
    'year') as Period;

  if (period === 'year') {
    // Fake delay
    await new Promise(r => setTimeout(r, randomArbitrary(300, 500)));
  }

  return NextResponse.json({
    date: dayjs('2021-05-21').toISOString(),
    category,
    data:
      period === 'year'
        ? mockData
        : mockData.map(group =>
            group.map((item, index) => {
              if (index > 0) {
                return item + Math.round(randomArbitrary(-20, 20));
              }
              return item;
            }),
          ),
  });
}
