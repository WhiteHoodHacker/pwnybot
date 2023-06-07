import {
  CommandInteraction,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder
} from "discord.js";

declare global {
  namespace PwnyBot {
    interface Command {
      data: SlashCommandBuilder | SlashCommandSubcommandBuilder;
      execute: (interaction: CommandInteraction) => Promise<void>;
    }
  }
}