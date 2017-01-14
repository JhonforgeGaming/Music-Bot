/**
 * Created by Will on 1/13/2017.
 */

const path = require('path');
const fsX = require('fs-extra');

const dispatchers = new Map();
const fileNames = new Map();

fsX.walk(process.env.MUSIC || './music')
    .on('data', item => {
        const parsed = path.parse(item.path);
        if(item.stats.isFile()) fileNames.set(parsed.name, item.path);
    });

exports.func = (msg, args) => {
    const song = args.join(' ');

    if(msg.channel.type !== 'text' || !fileNames.has(song)) return;
    if(dispatchers.has(msg.guild.id)) dispatchers.get(msg.guild.id).end();

    return msg.member.voiceChannel.join().then(conn => {
        const file = fileNames.get(song);
        dispatchers.set(msg.guild.id, conn.playFile(file));
    });
};