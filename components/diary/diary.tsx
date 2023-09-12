import dayjs from 'dayjs';
import {forwardRef} from 'react';

export interface DiaryType {
  title: string;
  date: string;
  content: string;
}

interface DiaryProps extends DiaryType {}

const Diary = forwardRef<HTMLDetailsElement, DiaryProps>(function DiaryImpl(
  {title, date, content},
  ref,
) {
  return (
    <article
      ref={ref}
      className="w-full border-2 border-[#707070] px-4 py-4 text-dark-500 md:aspect-1"
    >
      <time dateTime={date} className="text-lg font-medium leading-4">
        {dayjs(date).format('YYYY.MM.DD')}
        <br />
        {dayjs(date).format('HH:mm')}
      </time>
      <h3 className="mt-3 line-clamp-2 text-xs leading-5">{title}</h3>
      <div className="line-clamp-5 text-xs leading-5">{content}</div>
    </article>
  );
});

export default Diary;
