import dayjs from 'dayjs';
import {NextRequest, NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';

const TOTAL = 40;
const PER_PAGE = 8;
const MAX_PAGE = Math.ceil(TOTAL / PER_PAGE);

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
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: `/photos/column-${Math.max(
        1,
        Math.min(Math.round(randomArbitrary(0, 9)), 8),
      )}.jpg`,
      tags: ['魚料理', '和食  DHA', 'DHA'].slice(0, randomArbitrary(1, 4)),
    })),
    nextPage: Math.min(page + 1, MAX_PAGE) === page ? null : page + 1,
  });
}
