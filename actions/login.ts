'use server';

import dayjs from 'dayjs';
import {encode} from 'js-base64';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import type {Credentials} from '@/lib/auth';

export async function loginAction(values: Credentials) {
  await new Promise(r => setTimeout(r, 500));

  if (values.username === 'arent' && values.password === 'arent') {
    cookies().set('access_token', encode(values.username), {
      path: '/',
      httpOnly: true,
      expires: dayjs().add(1, 'year').toDate(),
    });
    redirect('/');
  }

  throw new Error('Username or password is incorrect');
}
