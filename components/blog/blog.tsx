import dayjs from 'dayjs';

interface BlogProps {
  title: string;
  image: string;
  date: string;
  tags?: string[];
}

export default function Blog({title, image, date, tags}: BlogProps) {
  return (
    <a
      href="/"
      role="link"
      aria-label={title}
      className="group w-full space-y-2"
    >
      <div className="relative aspect-[5/3] w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <time className="absolute bottom-0 left-0 block bg-primary-300 px-1.5 text-base text-light">
          {dayjs(date).format('YYYY.MM.DD')}{' '}
          <span className="ml-3 inline-block">
            {dayjs(date).format('HH:mm')}
          </span>
        </time>
      </div>
      <h4 className="line-clamp-2 text-[15px] transition group-hover:text-primary-500">
        {title}
      </h4>
      {tags && tags.length > 0 && (
        <div className="line-clamp-2 flex flex-wrap gap-2 text-xs text-primary-400 transition group-hover:text-primary-500">
          {tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}
