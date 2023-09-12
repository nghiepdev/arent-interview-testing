import clsx from 'clsx';

interface AlertProps extends React.PropsWithChildren {
  color?: 'primary' | 'light';
}

export default function Alert({children, color = 'primary'}: AlertProps) {
  return (
    <div
      className={clsx('w-full rounded-md p-4 text-light', {
        'bg-primary-400': color === 'primary',
        'bg-primary-300': color === 'light',
      })}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">{children}</div>
      </div>
    </div>
  );
}
