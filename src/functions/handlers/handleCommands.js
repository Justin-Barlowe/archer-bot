// const { ClientUser } = require("discord.js");
const fs = require('fs');
// const { fileURLToPath } = require("url");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders){
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith(".js"));

            const { commands, commandArray } = client;
            for (const file of commandFiles){
                const command = require(`../../commands/${folder}/${file}`);
                // commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
            }
        }
2
        const clientId = '1095407455032328252';
        const guildId ='999446677284991036';
        const rest = new REST ({ version: '9' }).setToken(process.env.token);
        try {
            console.log("Started refreshing application (/) commands.");

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body:client.commandArray,
            });

            console.log("Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    };
}