const fetch = require('node-fetch');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Ask Archer Bot for a random meme.'),
  async execute(interaction) {
    try {
      const response = await fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme');
      const data = await response.json();
      const meme = data.meme;
      interaction.reply(meme);
    } catch (error) {
      console.error('Error retrieving meme:', error);
      interaction.reply('Sorry, I was unable to find a meme at this time.');
    }
  },
};

