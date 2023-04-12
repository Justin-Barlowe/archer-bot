const fetch = require('node-fetch');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roast")
    .setDescription("Ask Archer bot to roast you."),
  async execute(interaction, client) {
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(response => response.json())
      .then(data => {
        const insult = data.insult;
        const response = `You want a roast? Here you go: ${insult}`;
        interaction.reply(response);
      })
      .catch(error => {
        console.error('Error retrieving insult:', error);
        interaction.reply('Sorry, I was unable to come up with a roast at this time.');
      });
  },
};