import { SlashCommandBuilder } from "discord.js";

export const PingCommand: PwnyBot.Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  execute: async (interaction) => {
    await interaction.reply("Pong!");
  }
}