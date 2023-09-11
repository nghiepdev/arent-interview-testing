import clsx from 'clsx';
import Image, {type StaticImageData} from 'next/image';

interface RecordRecommendProps {
  title: string;
  image: string | StaticImageData;
  anchorText: string;
  anchorHash: string;
}

export default function RecordRecommend({
  title,
  image,
  anchorText,
  anchorHash,
}: RecordRecommendProps) {
  return (
    <article className="aspect-1 min-w-[140px] flex-1 bg-primary-300 p-2 sm:p-4 md:p-6">
      <div
        className={clsx(
          'relative aspect-1 items-center justify-center overflow-hidden',
          'after:absolute after:inset-0 after:z-10 after:bg-dark-500/80',
        )}
      >
        <Image
          src={image}
          quality={100}
          priority
          placeholder="blur"
          alt={title}
          className="aspect-1 w-full object-cover object-left-bottom"
        />
        <div className="absolute top-1/2 z-20 w-full -translate-y-1/2 text-center">
          <h4 className="line-clamp-2 text-base text-primary-300 sm:text-[25px]">
            {title}
          </h4>
          <a
            href={anchorHash}
            className="mx-auto mt-2 block w-10/12 whitespace-nowrap bg-primary-400/90 p-px text-light transition hover:bg-primary-400 lg:w-[160px]"
          >
            {anchorText}
          </a>
        </div>
      </div>
    </article>
  );
}
