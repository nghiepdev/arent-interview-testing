import dayjs from 'dayjs';
import {NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Fake delay
  await new Promise(r => setTimeout(r, randomArbitrary(300, 500)));

  return NextResponse.json({
    date: dayjs('2021-05-21').toISOString(),
    data: Array.from({length: 8 * 4}).map(() => {
      return {
        title: '家事全般（立位・軽い）',
        energy: Math.floor(randomArbitrary(10, 40)),
        minutes: Math.floor(randomArbitrary(8, 25)),
      };
    }),
  });
}
