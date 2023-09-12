import {NextResponse} from 'next/server';

import {randomArbitrary} from '@/lib/randomize';

const category = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
const mockData = [
  [200, 190, 160, 150, 165, 135, 130, 110, 90, 90, 90, 140],
  [200, 180, 170, 140, 140, 120, 95, 90, 75, 70, 80, 90],
];

export async function GET() {
  // Fake delay
  await new Promise(r => setTimeout(r, randomArbitrary(300, 500)));

  return NextResponse.json({
    category,
    data: mockData,
  });
}
