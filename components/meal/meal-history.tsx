import dayjs from 'dayjs';
import {forwardRef} from 'react';

export interface MealHistoryType {
  title: string;
  date: string;
  image: string;
}

interface MealHistoryProps extends MealHistoryType {}

const MealHistory = forwardRef<HTMLDetailsElement, MealHistoryProps>(
  function MealHistoryImpl({title, date, image}, ref) {
    return (
      <article ref={ref} className="w-ful relative aspect-1 bg-primary-300/20">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <h4 className="absolute bottom-0 left-0 bg-primary-300 py-1 pl-2 pr-6 text-base text-light">
          <time>{dayjs(date).format('MM.DD')}</time>.{title}
        </h4>
      </article>
    );
  },
);

export default MealHistory;
