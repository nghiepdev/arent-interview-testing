import type {Metadata} from 'next';

import BodyRecord from './body-record';
import MyDiary from './my-diary';

export const metadata: Metadata = {
  title: 'My Record',
};

export default function MyRecord() {
  return (
    <div className="space-y-5 py-5 sm:space-y-14 sm:py-14">
      <BodyRecord />
      <MyDiary />
    </div>
  );
}
