'use client';

import {useEffect} from 'react';
import {suspend} from 'suspend-react';

import {Exercise} from '@/components/exercise';
import {apiCaller} from '@/lib/apiCaller';

interface MyExerciseProps {
  onDateChange: (date: string) => void;
}

export default function MyExerciseContent({onDateChange}: MyExerciseProps) {
  const {date, data: exercises} = suspend(async () => {
    const {data} = await apiCaller.get<{
      date: string;
      data: {title: string; energy: number; minutes: number}[];
    }>('/v1/record/exercise');
    return data;
  }, ['record', 'exercise']);

  useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  return exercises.map((exercise, index) => (
    <Exercise
      key={index}
      title={exercise.title}
      energy={exercise.energy}
      minutes={exercise.minutes}
    />
  ));
}
