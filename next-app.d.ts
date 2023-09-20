export {};

declare global {
  interface AppLayoutProps<P = Record<string | string[]>> {
    children: React.ReactNode;
    params: P;
  }

  namespace NodeJS {
    interface ProcessEnv {
      DETA_SPACE_APP_HOSTNAME?: string;
      NEXT_PUBLIC_API: string;
    }
  }
}
