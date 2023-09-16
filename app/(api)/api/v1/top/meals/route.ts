import dayjs from 'dayjs';
import {NextRequest, NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';

const TOTAL = 32;
const PER_PAGE = 8;
const MAX_PAGE = Math.ceil(TOTAL / PER_PAGE);
const MEALS = [
  'Morning',
  'Lunch',
  'Brunch',
  'Dinner',
  'Snack',
  'Supper',
  'Tea',
];
const PHOTOS = ['d01', 'd02', 'l01', 'l02', 'l03', 'm01', 'm02', 'm03'];

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  // Fake delay
  await new Promise(r => setTimeout(r, randomArbitrary(300, 500)));

  const searchParams = request.nextUrl.searchParams;

  const page = (() => {
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    return Number.isFinite(page) && page > 0 ? Math.min(page, MAX_PAGE) : 1;
  })();

  return NextResponse.json({
    page,
    total: TOTAL,
    per_page: PER_PAGE,
    data: Array.from({length: PER_PAGE}).map((_, index) => ({
      date: dayjs()
        .add(page + index, 'day')
        .toISOString(),
      title: MEALS[Math.floor(Math.random() * MEALS.length)],
      image: `/photos/${PHOTOS[Math.floor(Math.random() * PHOTOS.length)]}.jpg`,
    })),
    nextPage: Math.min(page + 1, MAX_PAGE) === page ? null : page + 1,
  });
}
