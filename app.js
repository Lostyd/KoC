//__________________discord_____________________________________________________________________________________________
var Discord = require("discord.js");
var {Client, RichEmbed, Attachment} = require('discord.js');
var dsbot = new Discord.Client();
dsbot.music = require("discord.js-musicbot-addon");
dsbot.on('ready', function () {
});
// Now we start the music module.
dsbot.music.start(dsbot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: 'AIzaSyBXX4f-fQW1vLpgYvvlT0KiuGkwOEkW7jc'
});


//______________________________________________________________________________________________________________________
//___________________token______________________________________________________________________________________________
dsbot.login(process.env.TOKEN);
//____________________________________________________________________________