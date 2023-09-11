'use client';

import {useState} from 'react';

import {randomArbitrary} from '@/lib/randomize';
import {useInterval} from '@/lib/use-interval';

interface PercentCircleProps {
  progress: number;
  size?: number;
  circleColor?: string;
  progressColor?: string;
  circleWidth?: number;
  progressWidth?: number;
  progressShape?: 'round' | 'square';
  filter?: string;
  renderText?: (progress: number) => React.ReactNode;
}

export default function PercentCircle({
  size = 180,
  circleColor = '#e0e0e0',
  progressColor = '#EA6C00',
  circleWidth = 5,
  progressWidth = 5,
  progressShape = 'round',
  filter,
  renderText,
  ...restProps
}: PercentCircleProps) {
  const progress = Math.min(Math.max(restProps.progress, 0), 100);
  const [value, setValue] = useState(0);
  const radius = size / 2 - 10;
  const circumference = 3.14 * radius * 2;
  const percentage = Math.round(circumference * ((100 - value) / 100));

  useInterval(
    () => {
      setValue(value =>
        Math.min(value + Math.floor(randomArbitrary(1, 4)), progress),
      );
    },
    value >= progress ? null : 50,
  );

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90"
      >
        <circle
          r={`${size / 2 - 10}`}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke={circleColor}
          strokeWidth={circleWidth}
          strokeDasharray={circumference}
          strokeDashoffset="0"
        ></circle>
        <circle
          r={`${size / 2 - 10}`}
          cx={size / 2}
          cy={size / 2}
          stroke={progressColor}
          strokeWidth={progressWidth}
          strokeLinecap={progressShape}
          strokeDashoffset={percentage}
          strokeDasharray={circumference}
          fill="transparent"
          filter={filter}
        ></circle>
      </svg>
      {typeof renderText === 'function' && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {renderText(value)}
        </div>
      )}
    </div>
  );
}
