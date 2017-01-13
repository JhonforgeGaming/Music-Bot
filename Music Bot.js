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
	
	console.log("Playing Echo.mp3")
	if (msg.content.startsWith(prefix + "playEcho")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/ECHO.mp3');
		})
	}
	
	console.log("Playing Karma.mp3")
	if (msg.content.startsWith(prefix + "playKarma")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/KARMA.mp3');
		})
	}
	
	console.log("Playing OMFG.mp3")
	if (msg.content.startsWith(prefix + "playOMFG")) {
		voiceChannel.join()
		.then(connection=> {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/OMFG.mp3');
		})
	}
	
	console.log("Playing Exorcism.mp3")
	if (msg.content.startsWith(prefix + "playExorcism")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Exorcism.mp3');
		})
	}
	
	console.log("Playing Timberwolf.mp3")
	if (msg.content.startsWith(prefix + "playTimberwolf")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Timberwolf.mp3');
		})
	}
	
		console.log("Playing Tetris.mp3")
	if (msg.content.startsWith(prefix + "playTetris")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Tetris.mp3');
		})
	}
	
		console.log("Playing Breathe Out.mp3")
	if (msg.content.startsWith(prefix + "playBreathe")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Breathe.mp3');
		})
	}
	
			console.log("Playing Middle.mp3")
	if (msg.content.startsWith(prefix + "playMiddle")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Middle.mp3');
		})
	}
	
			console.log("Playing Stand.mp3")
	if (msg.content.startsWith(prefix + "playStand")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Stand.mp3');
		})
	}
	
			console.log("Playing Wildfire.mp3")
	if (msg.content.startsWith(prefix + "playWildfire")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Wildfire.mp3');
		})
	}
	
			console.log("Playing Stars.mp3")
	if (msg.content.startsWith(prefix + "playStars")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Stars.mp3');
		})
	}
	
			console.log("Playing Asthma.mp3")
	if (msg.content.startsWith(prefix + "playAsthma")) {
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Asthma.mp3');
		})
	}
	
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("YOUR BOT TOKEN!!!")
