import {NextResponse} from 'next/server';

/**
 * Fake API login
 * @field username = arent
 * @field password =  arent
 */
export async function POST() {
  return NextResponse.json({
    ok: 'ok!',
  });
}
