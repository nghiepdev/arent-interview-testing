'use client';

import {useTransition} from 'react';
import {type SubmitHandler, useForm} from 'react-hook-form';

import {loginAction} from '@/actions/login';
import {Button} from '@/components/ui';
import type {Credentials} from '@/lib/auth';

export default function Login() {
  const [isSubmiting, startTransition] = useTransition();

  const {handleSubmit, register, formState, setError, setFocus} =
    useForm<Credentials>();

  const onSubmit: SubmitHandler<Credentials> = values => {
    if (isSubmiting) {
      return;
    }
    startTransition(async () => {
      try {
        await loginAction(values);
      } catch (error) {
        setError('root', {
          message: error instanceof Error ? error.message : 'Unknown error',
        });
        setFocus('username');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-1">
        <label
          htmlFor="username"
          className="text-gray-900 block text-sm font-medium leading-6"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="arent"
          className="ring-gray-300 block w-full rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset"
          autoComplete="off"
          {...register('username', {
            required: 'Username field is required',
          })}
        />
        {formState.errors.username && (
          <div className="text-primary-500">
            {formState.errors.username.message}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="text-gray-900 mt-5 block text-sm font-medium leading-6"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="arent"
          className="ring-gray-300 block w-full rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset"
          autoComplete="off"
          {...register('password', {
            required: 'Password field is required',
          })}
        />
        {formState.errors.password && (
          <div className="text-primary-500">
            {formState.errors.password.message}
          </div>
        )}
      </div>
      {formState.errors.root && (
        <div className="mt-4 rounded-md border border-primary-500 bg-primary-500/10 p-2 text-primary-500">
          <span className="font-medium">Error: </span>{' '}
          {formState.errors.root.message}
        </div>
      )}
      <Button
        type="submit"
        fullWidth
        color="primary"
        className="mt-5 font-medium"
        loading={isSubmiting}
      >
        Sign In
      </Button>
    </form>
  );
}
