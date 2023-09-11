import clsx from 'clsx';

interface BadgeProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<'span'> {
  count?: number;
}

export default function Badge({children, count, ...restProps}: BadgeProps) {
  if (!count) {
    return children;
  }

  const label = count > 99 ? '99+' : `${count}`;

  return (
    <span {...restProps} className={clsx('relative', restProps.className)}>
      {children}
      <span
        className={clsx(
          'absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-medium text-light',
          {
            'w-6': label.length > 2,
          },
        )}
      >
        {label}
      </span>
    </span>
  );
}
