import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { configDotenv } from 'dotenv';
import { env } from 'process';
import path from 'path';

const command_folder = path.join(__dirname, 'commands');
const event_folder = path.join(__dirname, 'events');

// Configure dotenv
configDotenv();

// Configure commands
// recursive function to get all .ts files in the commands folder


console.log('Starting PwnyBot...');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

// Set up commands in commands folder


// Set up events


client.login(env.DISCORD_TOKEN);
