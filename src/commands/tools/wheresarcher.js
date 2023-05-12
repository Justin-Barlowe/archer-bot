const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wheresarcher")
    .setDescription("Find out where Archer is instead of being on like he said he would be."),
  async execute(interaction, client) {
    const messages = [
      "Feeding the pigs.",
      "Getting yelled at by Kasie.",
      "Taking a bath.",
      "Taking a nap.",
      "At the vape store buying over priced diet weed chocolates.",
      "Eating...again.",
      "Walking in circles.",
      "Went to get more seltzers.",
      "I'm on just give me a minute.",
      "Im 12 hours late, where ya'll at?.",
      "I said I was gonna get on but I'm going to watch movies and pretend to get high.",
      "Kasie made me go out last minute.",
      "I had a manic episode and didn't actually plan on getting on.",
      "So I got side tracked hahahah",
      "Your text seemed like you didn't want to do much so I did not get on.",
      "I forgot I had to do something else.",
      "I went to the gym.",
      "Feeding the dogs.",
      "Feeding the cats.",
      "In the sauna.",
      "Taking another bath.",
      "'Be on in 20'"

    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    await interaction.reply({
      content: randomMessage,
    });
  },
};