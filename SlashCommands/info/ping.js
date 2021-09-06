const { Client, CommandInteraction } = require('discord.js')

module.exports = {
  name: "ping",
  description: "see the bot's latency",
  type: "CHAT_INPUT",
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    interaction.followUp({ content: `The bot's latency is ${client.ws.ping} ws.` })
  }
}