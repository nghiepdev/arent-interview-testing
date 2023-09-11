interface MealHistoryProps {
  title: string;
  image: string;
}

export default function MealHistory({title, image}: MealHistoryProps) {
  return (
    <article className="relative aspect-1 w-full">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <h4 className="absolute bottom-0 left-0 bg-primary-300 py-1 pl-2 pr-6 text-base text-light">
        {title}
      </h4>
    </article>
  );
}
