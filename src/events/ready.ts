import { Events } from 'discord.js';

export const event: PwnyBot.Event = {
  name: Events.ClientReady,
  once: true,
  execute: async (client) => {
    console.log(`Logged in as ${client.user?.tag}!`);
  }
}