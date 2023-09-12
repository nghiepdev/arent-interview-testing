import dayjs from 'dayjs';
import {NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';

export async function GET() {
  // Fake delay
  await new Promise(r => setTimeout(r, randomArbitrary(300, 500)));

  return NextResponse.json({
    rate: Math.floor(randomArbitrary(65, 99)),
    date: dayjs('2021-05-21').toISOString(),
  });
}
