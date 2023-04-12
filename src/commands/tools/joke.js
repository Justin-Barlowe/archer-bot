const fetch = require('node-fetch');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Ask Archer bot to tell you a joke."),
  async execute(interaction, client) {
    fetch('https://v2.jokeapi.dev/joke/Dark?type=single')
      .then(response => response.json())
      .then(data => {
        const joke = data.joke;
        const response = `You want a joke? Here you go: ${joke}`;
        interaction.reply(response);
      })
      .catch(error => {
        console.error('Error retrieving insult:', error);
        interaction.reply('Sorry, I was unable to come up with a joke at this time.');
      });
  },
};
