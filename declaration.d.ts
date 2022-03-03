declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NEXT_PUBLIC_API_BASE_URL: string;
      NEXT_PUBLIC_AUTH_REDIRECT_URI: string;
      NEXT_PUBLIC_SIGNUP_REDIRECT_URI: string;
    }
  }
}
