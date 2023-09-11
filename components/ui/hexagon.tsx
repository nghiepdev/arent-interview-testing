import clsx from 'clsx';

interface HexagonProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: number;
}

export default function Hexagon({
  children,
  size = 200,
  ...restProps
}: HexagonProps) {
  return (
    <div
      {...restProps}
      className={clsx(restProps.className, 'aspect-1 bg-primary-gradient')}
      style={{
        width: size,
        height: size,
        clipPath:
          'polygon(93.30% 75.00%,50.00% 100.00%,6.70% 75.00%,6.70% 25.00%,50.00% 0.00%,93.30% 25.00%)',
      }}
    >
      {children}
    </div>
  );
}
