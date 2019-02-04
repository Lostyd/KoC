var Discord = require("discord.js");
            var {Client, RichEmbed, Attachment} = require('discord.js');
var schems = require('../../db/shems');
var disuser = schems.disuser;

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



exports.command = function (msg, bot) {

    if(msg.content === 'join'){
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    msg.reply('I have successfully connected to the channel!');
                    connection.playArbitraryInput('https://cs4-5v4.vkuseraudio.net/p10/75f368caf32a31.mp3?extra=OGWnx3CLpWe-XJTbxl6G4Oy-hWm7SdnRqGA_A_ogzYSDum8S892ijiyLHRwnaBwLs97iKtcZ_jrZi1g6EBvM9pRfta9IBzJw5ue2G_MIsrrxK73o2OsYB6bPR3xkN6h-b4H63TZeWVlNZAZ-iGOxN4nupZY');
                })
                .catch(console.log);
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }

    if(msg.content === 'leave'){
        msg.member.voiceChannel.leave();
    }
    var exp = getRandomInt(Number(process.env.minExp),Number(process.env.maxExp)) + (msg.content.length * 0.5);
    exp = exp.toFixed(0);
    if(msg.channel.type !== 'dm'){
    disuser.findOne({userid: msg.author.id}, function (err, rows) {
        if(rows !== null) {
            if ((Date.now() - Number(rows.messagedate)) >= Number(process.env.cdExp)) {
            disuser.findOneAndUpdate({userid: msg.author.id}, {$inc: {exp: exp}, messagedate: Date.now()}, function () {


                    disuser.findOne({userid: msg.author.id}, function (err, rows) {
                        if (Number(rows.exp) >= (Number(process.env.startExp) * Math.pow(2, Number(rows.lvl) - 1))) {
                            disuser.findOneAndUpdate({userid: msg.author.id}, {$inc: {lvl: 1}}, function () {
                                dsbot.guilds.get('532970439568261142').channels.get('532970439568261144').send('Поздарвляю вы получили ' + (Number(rows.lvl) + 1) + ' уровень')
                            })
                        }
                    })

            })
        }
        }

    });
    }
    if(msg.content === '!token'){
        if(msg.channel.type === 'dm'){
        disuser.findOne({userid: msg.author.id}, function (err, rows) {
            if(rows !== null){
                msg.channel.send(rows.uuid);
            }
        });
        }
    }
};