import type {Metadata} from 'next';

import BodyRecord from './body-record';

export const metadata: Metadata = {
  title: 'Records',
};

export default function Records() {
  return (
    <div className="space-y-5 py-5 sm:space-y-14 sm:py-14">
      <BodyRecord />
    </div>
  );
}
