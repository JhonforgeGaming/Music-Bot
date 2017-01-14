require('dotenv').config();
const Discord = require('discord.js');
const handler = require('discord-handles')({
    prefixes: ['!'],
    directory: './src/commands'
});

const client = new Discord.Client();

client.on('ready', () => console.log('ready')); // eslint-disable-line no-console
client.on('message', handler);
client.login(process.env.TOKEN);