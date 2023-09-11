'use client';

import dayjs from 'dayjs';

import {Exercise} from '@/components/exercise';

export default function MyExercise() {
  return (
    <section id="my-exercise" className="container bg-dark-500 px-6 py-4">
      <h2 className="flex text-light">
        <span className="inline-block w-[96px] text-[15px] uppercase">
          Body
          <br />
          Exercise
        </span>
        <time dateTime="2021-05-21" className="text-xl font-medium">
          {dayjs('2021-05-21').format('YYYY.MM.DD')}
        </time>
      </h2>
      <div className="mt-2 h-[192px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-primary-300 scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl supports-[overflow:overlay]:[overflow-y:overlay]">
        <div className="gap-9 sm:columns-2">
          {Array.from({length: 8 * 4}).map((_, index) => (
            <Exercise
              key={index}
              title="家事全般（立位・軽い）"
              energy={26}
              minutes={10}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
