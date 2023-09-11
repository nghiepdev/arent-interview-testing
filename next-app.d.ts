export {};

declare global {
  interface AppLayoutProps<P = Record<string | string[]>> {
    children: React.ReactNode;
    params: P;
  }

  namespace NodeJS {
    interface ProcessEnv {}
  }
}
