'use client';

import clsx from 'clsx';
import {useEffect, useState} from 'react';

interface BackToTopProps extends React.ComponentPropsWithoutRef<'span'> {}

export default function BackToTop(props: BackToTopProps) {
  const [show, setShow] = useState(false);

  const handleToTop = () => {
    try {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    } catch {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    setShow(window.scrollY > 100);
    const handler = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      {...props}
      className={clsx(props.className, 'transition', {
        'opacity-100': show,
        'opacity-0': !show,
      })}
      onClick={handleToTop}
    >
      <img src="/icons/back_to_top.svg" alt="" />
    </button>
  );
}
