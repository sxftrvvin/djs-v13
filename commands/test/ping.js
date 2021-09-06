const { Message, Client } = require('discord.js')

module.exports = {
  name: "ping",
  description: "see the bot's latency",
  aliases: ['latency'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    message.channel.send(`The bot's latency is ${client.ws.ping} ws.`);
  }
}