import type {Metadata} from 'next';

import AchievementRate from './achievement-rate';

export const metadata: Metadata = {
  title: 'Top',
};

export default function Top() {
  return (
    <div className="space-y-7 pb-7">
      <AchievementRate />
    </div>
  );
}
