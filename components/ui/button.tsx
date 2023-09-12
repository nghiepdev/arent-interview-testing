import clsx from 'clsx';

import {noop} from '@/lib/misc';

import Spinner from './spinner';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'light' | 'gradient';
  fullWidth?: boolean;
}

export default function Button({
  children,
  loading,
  rounded = 'md',
  size = 'md',
  color = 'default',
  fullWidth,
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      type={loading ? 'button' : restProps.type}
      onClick={loading ? noop : restProps.onClick}
      className={clsx(
        restProps.className,
        'flex items-center justify-center gap-1.5 opacity-90 transition-all',
        {
          'bg-gray-400 text-light': color === 'default',
          'bg-primary-400 text-light': color === 'primary',
          'bg-light text-primary-300': color === 'light',
          'bg-primary-gradient text-light': color === 'gradient',
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-full': rounded === 'full',
          'h-6 px-5 text-xs': size === 'xs',
          'h-8 px-6 text-base': size === 'sm',
          'text-md h-10 px-8': size === 'md',
          'h-[56px] px-10 text-lg': size === 'lg',
        },
        {
          'w-full': fullWidth,
          'cursor-default bg-opacity-70 opacity-60': loading,
          'hover:opacity-100': !loading,
        },
      )}
    >
      {loading && <Spinner />}
      <span>{children}</span>
    </button>
  );
}
