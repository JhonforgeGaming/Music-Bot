const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');


bot.on("message", msg => {
	let prefix = "!";
const voiceChannel = msg.member.voiceChannel;

	console.log("Shutdown...")
	if (msg.content.startsWith(prefix + "shutdownbot")) {
		if (msg.author.id != "235144525763444736") return;
		console.log(`Shutdown initiated by ${msg.author}...`)
		console.log("Shutting down...")
		process.exit()
	}
	
			console.log("Playing NAME.mp3")
	if (msg.content.startsWith(prefix + "playNAME")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('FILEPATH.mp3');
		})
	}
	
			console.log("Playing NAME.mp3")
	if (msg.content.startsWith(prefix + "playNAME")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('FILEPATH.mp3');
		})
	}
	
			console.log("Playing NAME.mp3")
	if (msg.content.startsWith(prefix + "playNAME")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('FILEPATH.mp3');
		})
	}
	
			console.log("Playing NAME.mp3")
	if (msg.content.startsWith(prefix + "playNAME")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('FILEPATH.mp3');
		})
	}
	
			console.log("Playing NAME.mp3")
	if (msg.content.startsWith(prefix + "playNAME")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('FILEPATH.mp3');
		})
	}
	
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("YOUR BOT TOKEN!!!")