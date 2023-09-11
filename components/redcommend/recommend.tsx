interface RedcommendedProps {
  title: string;
  subtitle: string;
}

export default function Redcommended({title, subtitle}: RedcommendedProps) {
  return (
    <article className="bg-dark-600 px-3 pb-6 pt-6 text-center">
      <h4 className="text-[22px] uppercase leading-6 text-primary-300">
        {title}
      </h4>
      <span className="inline-block h-0.5 w-14 rounded-full border-t border-t-light/80"></span>
      <h5 className="text-lg text-light">{subtitle}</h5>
    </article>
  );
}
