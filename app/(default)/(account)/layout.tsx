import {decode} from 'js-base64';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export default function ProtectedLayout({children}: AppLayoutProps) {
  const accessToken = cookies().get('access_token')?.value;
  if (accessToken && decode(accessToken).includes('arent')) {
    return <>{children}</>;
  }

  redirect('/sign-in');
}
