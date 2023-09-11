import dayjs from 'dayjs';

import {Blog} from '@/components/blog';
import {Button} from '@/components/ui';

export default function BlogSecton() {
  return (
    <div className="container">
      <section className="grid gap-x-2 gap-y-5 px-2 grid-fill-[234px] sm:px-0">
        {Array.from({length: 8}).map((_, index) => (
          <Blog
            key={index}
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            image="/photos/column-6.jpg"
            date={dayjs().subtract(2, 'day').toISOString()}
            tags={['魚料理', '和食  DHA', 'DHA']}
          />
        ))}
      </section>
      <div className="mt-7 flex justify-center">
        <Button
          color="gradient"
          rounded="md"
          size="lg"
          className="min-w-[296px]"
        >
          コラムをもっと見る
        </Button>
      </div>
    </div>
  );
}
