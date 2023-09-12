'use client';

import {type SubmitHandler, useForm} from 'react-hook-form';

import {Button} from '@/components/ui';

interface FormValues {
  username: string;
  password: string;
}

export default function Login() {
  const {handleSubmit, register, formState} = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
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
      <Button
        type="submit"
        fullWidth
        color="primary"
        className="mt-5 font-medium"
      >
        Sign In
      </Button>
    </form>
  );
}
