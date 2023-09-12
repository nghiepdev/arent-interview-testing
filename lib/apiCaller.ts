import axios from 'redaxios';

export const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});
