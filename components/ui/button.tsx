import clsx from 'clsx';

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
        'hover:opacity-100',
        {
          'w-full': fullWidth,
        },
      )}
    >
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="animate-spin"
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
      )}
      <span>{children}</span>
    </button>
  );
}
