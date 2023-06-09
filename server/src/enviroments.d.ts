export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      ACCESS_TOKEN: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
