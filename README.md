# Music-Bot
A simple bot that plays music from your PC.

# Requirements
In the main file there are five different .mp3's you can change. they ARE NOT downloaded with the bot and just say "FILENAME.mp3" Change this to the path of the file you want to play THEN the command from !playNAME to !play[what you want]. Then change the console.log for that code block to console.log("Playing {FileName}.mp3"). <br>
Example: 			
    console.log("Playing Stars.mp3") <br>
	if (msg.content.startsWith(prefix + "playStars")) { <br>
		voiceChannel.join() <br>
		.then(connection => { <br>
			let dispatcher = connection.playFile('C:/Users/Jhonforge_Gaming/Music/Stars.mp3'); <br>
		}) <br>
	} <br>
