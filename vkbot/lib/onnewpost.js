var VkBot = require('node-vk-bot-api');
var Session = require('node-vk-bot-api/lib/session');
var Discord = require("discord.js");
var {Client, RichEmbed, Attachment} = require('discord.js');


exports.commands= function(ctx) {
    var i = 0;
    var photos = 'Пикчи:';
    var music = 'Треки:';
    if(ctx.message.attachments !== undefined){
        ctx.message.attachments.forEach(function (element, index) {
            if(element.photo !== undefined){
                i = index;
                photos = photos + '\n' + element.photo.photo_604
            }
            if(element.audio !== undefined){
                music = music + '\n' + element.audio.artist + " - " + element.audio.title
            }
            if(element.video !== undefined){
            }
        })
    }
    if(ctx.message.attachments !== undefined){
        if(ctx.message.attachments[i].photo !== undefined){
    var embed = new RichEmbed()
        .setColor(0xf301a9)
        .setTitle('Новый пост!')
        .setDescription(''+ctx.message.text+ ''
            + "\n" + photos + '\n'
            +music + '\n')
        .setImage(ctx.message.attachments[i].photo.photo_604);
    dsbot.guilds.get('471630590806851584').channels.get('538229032375025666').send(embed);
        } else {
            var embed = new RichEmbed()
                .setColor(0xf301a9)
                .setTitle('Новый пост!')
                .setDescription(''+ctx.message.text+ ''
                    + "\n" + photos + '\n'
                    +music + '\n');
                //.setImage(ctx.message.attachments[0].photo.photo_807);
            dsbot.guilds.get('471630590806851584').channels.get('538229032375025666').send(embed);

        }
    } else {
        var embed = new RichEmbed()
            .setColor(0xf301a9)
            .setTitle('Новый пост!')
            .setDescription(''+ctx.message.text+ ''
                + "\n" + photos + '\n'
                +music + '\n');
            //.setImage(ctx.message.attachments[0].photo.photo_807);
        dsbot.guilds.get('471630590806851584').channels.get('538229032375025666').send(embed);

    }
};