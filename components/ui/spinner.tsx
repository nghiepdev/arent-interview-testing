'use client';

import clsx from 'clsx';

interface SpinnerProps
  extends Omit<
    React.ComponentPropsWithoutRef<'svg'>,
    'viewBox' | 'width' | 'height'
  > {
  size?: number;
}

export default function Spinner({size = 30, ...restProps}: SpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...restProps}
      width={size}
      height={size}
      className={clsx(restProps.className, 'animate-spin')}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
          clipRule="evenodd"
          opacity=".2"
        />
        <path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z" />
      </g>
    </svg>
  );
}
