import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export async function GET(): Promise<never> {
  cookies().delete('access_token');
  redirect('/sign-in');
}
