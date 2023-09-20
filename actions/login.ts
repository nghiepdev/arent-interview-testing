'use server';

import dayjs from 'dayjs';
import {encode} from 'js-base64';
import {cookies} from 'next/headers';
import {redirect, RedirectType} from 'next/navigation';

import type {Credentials} from '@/lib/auth';

export async function loginAction(
  values: Credentials,
): Promise<void | {error: true; message: string}> {
  // Fake delay
  await new Promise(r => setTimeout(r, 500));

  if (values.username === 'arent' && values.password === 'arent') {
    cookies().set({
      name: 'access_token',
      value: encode(values.username),
      path: '/',
      httpOnly: true,
      expires: dayjs().add(1, 'year').toDate(),
    });
    redirect('/account/top', RedirectType.replace);
  }

  return {
    error: true as const,
    message: 'Username or password is incorrect.',
  };
}
