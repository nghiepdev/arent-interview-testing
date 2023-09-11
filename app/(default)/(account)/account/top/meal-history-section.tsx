import {MealHistory} from '@/components/meal';
import {Button} from '@/components/ui';

export default function MealHistorySecton() {
  return (
    <div className="container">
      <section className="grid gap-2 px-2 grid-fill-[234px] sm:px-0">
        {Array.from({length: 8}).map((_, index) => (
          <MealHistory
            key={index}
            title="05.21.Dinner"
            image="/photos/l02.jpg"
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
          記録をもっと見る
        </Button>
      </div>
    </div>
  );
}
