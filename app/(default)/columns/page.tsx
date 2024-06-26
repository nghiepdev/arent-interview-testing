import type {Metadata} from 'next';

import BlogSecton from './blog-section';
import RecommendedSection from './recommended-section';

export const metadata: Metadata = {
  title: 'Columns',
};

export default function Columns() {
  return (
    <div className="space-y-5 py-5 sm:space-y-14 sm:py-14">
      <RecommendedSection />
      <BlogSecton />
    </div>
  );
}
