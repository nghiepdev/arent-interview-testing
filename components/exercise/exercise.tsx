interface ExerciseProps {
  title: string;
  energy: number;
  minutes: number;
}

export default function Exercise({title, energy, minutes}: ExerciseProps) {
  return (
    <article className="flex gap-4 border-b border-gray-400 pb-px pt-2 text-light">
      <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-light"></span>
      <div className="grow">
        <h5 className="line-clamp-1 text-[15px]">{title}</h5>
        <span className="text-[15px] text-primary-300">{energy}kcal</span>
      </div>
      <div className="shrink-0 text-lg text-primary-300">{minutes} min</div>
    </article>
  );
}
