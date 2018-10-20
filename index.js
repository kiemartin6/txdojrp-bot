const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NDY5NTMyNzI3Njc5NTE2Njcy.Dq0eFw.K5RM2wvLWWGZALr1RS1dAnaXTpU');