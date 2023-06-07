namespace NodeJS {
  interface ProcessEnv {
    DISCORD_TOKEN: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
  }
}