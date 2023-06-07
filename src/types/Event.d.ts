import { Events } from "discord.js";

declare global {
  namespace PwnyBot {
    interface Event {
      name: `${Events}`;
      once: boolean;
      execute: (...args: any[]) => Promise<void>;
    }
  }
}