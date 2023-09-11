import type {Metadata} from 'next';

import RecommendedSection from './recommended-section';

export const metadata: Metadata = {
  title: 'Column',
};

export default function Column() {
  return (
    <div className="space-y-5 py-5 sm:space-y-14 sm:py-14">
      <RecommendedSection />
    </div>
  );
}
