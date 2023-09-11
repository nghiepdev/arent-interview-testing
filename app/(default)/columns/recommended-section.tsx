import {Recommend} from '@/components/redcommend';

export default function RecommendedSecton() {
  return (
    <div className="container">
      <section className="grid gap-x-2 gap-y-2 grid-fill-[216px] md:gap-x-8">
        <Recommend title="Recommended column" subtitle="オススメ" />
        <Recommend title="Recommended diet" subtitle="ダイエット" />
        <Recommend title="Recommended beauty" subtitle="美容" />
        <Recommend title="Recommended health" subtitle="健康" />
      </section>
    </div>
  );
}
