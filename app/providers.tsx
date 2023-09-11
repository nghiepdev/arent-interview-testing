'use client';

import * as echarts from 'echarts';

echarts.registerTheme('dark', {
  backgroundColor: '#2E2E2E',
});

echarts.registerTheme('dark-light', {
  backgroundColor: '#414141',
});

export default function Provider({children}: React.PropsWithChildren) {
  return <>{children}</>;
}
