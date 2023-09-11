import {RecordRecommend} from '@/components/redcommend';
import myRecommendPhoto1 from '@/public/photos/MyRecommend-1.jpg';
import myRecommendPhoto2 from '@/public/photos/MyRecommend-2.jpg';
import myRecommendPhoto3 from '@/public/photos/MyRecommend-3.jpg';

export default function MainController() {
  return (
    <div className="container">
      <section className="flex gap-4 overflow-x-auto scrollbar-hide sm:flex-row sm:gap-8 md:gap-12">
        <RecordRecommend
          title="BODY RECORD"
          image={myRecommendPhoto1}
          anchorText="自分のカラダの記録"
          anchorHash="#body-record"
        />
        <RecordRecommend
          title="BODY EXERCISE"
          image={myRecommendPhoto2}
          anchorText="自分の運動の記録"
          anchorHash="#my-exercise"
        />
        <RecordRecommend
          title="BODY DIARY"
          image={myRecommendPhoto3}
          anchorText="自分の日記"
          anchorHash="#my-diary"
        />
      </section>
    </div>
  );
}
