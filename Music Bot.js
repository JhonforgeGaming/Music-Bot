const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');


bot.on("message", msg => {
let prefix = "!";
const voiceChannel = msg.member.voiceChannel;

	
	console.log("Shutdown?")
	if (msg.content.startsWith(prefix + "shutdownbot")) {
		if (msg.author.id != "235144525763444736") return;
		console.log(`Shutdown initiated by ${msg.author}...`)
		console.log("Shutting down...")
		process.exit()
	}
	
	if (msg.content.startsWith(prefix + "playEcho")) {
		console.log("Playing Echo.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/ECHO.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playKarma")) {
		console.log("Playing Karma.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/KARMA.mp3');
		})
	}
	
	
	if (msg.content.startsWith(prefix + "playOMFG")) {
		console.log("Playing OMFG.mp3")
		voiceChannel.join()
		.then(connection=> {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/OMFG.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playExorcism")) {
		console.log("Playing Exorcism.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Exorcism.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playTimberwolf")) {
		console.log("Playing Timberwolf.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Timberwolf.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playTetris")) {
		console.log("Playing Tetris.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Tetris.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playBreathe")) {
		console.log("Playing Breathe Out.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Breathe.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playMiddle")) {
		console.log("Playing Middle.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Middle.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playStand")) {
		console.log("Playing Stand.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Stand.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playWildfire")) {
		console.log("Playing Wildfire.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Wildfire.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playStars")) {
		console.log("Playing Stars.mp3")
		voiceChannel.join()
		.then(connection => {
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Stars.mp3');
		})
	}
	
	if (msg.content.startsWith(prefix + "playAsthma")) {
		console.log("Playing Asthma.mp3")
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
