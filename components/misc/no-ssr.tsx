'use client';

import {useEffect, useState} from 'react';

export default function NoSSR({children}: React.PropsWithChildren) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? children : null;
}
