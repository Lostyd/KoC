//__________________discord_____________________________________________________________________________________________
var Discord = require("discord.js");
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
dsbot.music.start(dsbot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: 'AIzaSyBXX4f-fQW1vLpgYvvlT0KiuGkwOEkW7jc'
});


//______________________________________________________________________________________________________________________
//___________________token______________________________________________________________________________________________
dsbot.login("NTMyOTY5NTI5ODU3NDA5MDYz.DyJ6YA.XsgXgGfUchRmThVPqYOdb4mfHmE");
//____________________________________________________________________________