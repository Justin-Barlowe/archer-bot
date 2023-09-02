const fetch = require('node-fetch');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("Get information about the server."),
    async execute(interaction, client) {
        try {
            const guild = interaction.guild;
            const {
                id: guildID,
                name: guildName,
                iconURL: guildIcon,
                memberCount: guildMemberCount,
                owner: { user: { tag: guildOwner } },
                messageCount: guildMessageCount,
            } = guild;

            // Formatting and sending the output back to Discord
            interaction.reply(`Server name: ${guildName}\nTotal members: ${guildMemberCount}\nOwner: ${guildOwner}`);

        } catch (error) {
            console.error('Error retrieving server info:', error);
            interaction.reply('Sorry, I was unable to retrieve server info at this time.');
        }
    }
};
