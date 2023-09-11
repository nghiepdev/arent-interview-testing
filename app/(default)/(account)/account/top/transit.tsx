import {Hexagon} from '@/components/ui';

const transits: {title: string; image: string}[] = [
  {
    title: 'Morning',
    image: '/icons/icon_knife.svg',
  },
  {
    title: 'Lunch',
    image: '/icons/icon_knife.svg',
  },
  {
    title: 'Dinner',
    image: '/icons/icon_knife.svg',
  },
  {
    title: 'Snack',
    image: '/icons/icon_cup.svg',
  },
];

export default function Transit() {
  return (
    <section className="flex flex-wrap justify-center gap-x-5 gap-y-5 text-light lg:gap-x-16">
      {transits.map(({title, image}, index) => (
        <Hexagon
          key={index}
          size={136}
          className="flex flex-col items-center justify-center text-xl"
        >
          <img src={image} alt={title} />
          <span>{title}</span>
        </Hexagon>
      ))}
    </section>
  );
}
