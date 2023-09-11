import {Diary} from '@/components/diary';
import {Button} from '@/components/ui';

export default function MyDiary() {
  return (
    <div id="my-diary" className="container">
      <h2 className="text-xl font-medium uppercase text-dark-500">My Diary</h2>
      <section className="mt-1 grid gap-x-3 gap-y-3 grid-fill-[231px]">
        {Array.from({length: 8}).map((_, index) => (
          <Diary
            key={index}
            title="私の日記の記録が一部表示されます。"
            date="2021-05-21 23:25:00"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
          />
        ))}
      </section>
      <div className="mt-7 flex justify-center">
        <Button
          color="gradient"
          rounded="md"
          size="lg"
          className="min-w-[288px]"
        >
          自分の日記をもっと見る
        </Button>
      </div>
    </div>
  );
}
