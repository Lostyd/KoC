var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var sess = require('express-session');
var config = require('config');
/*
//______________________________________________________________________________________________________________________
//_____________________db_______________________________________________________________________________________________
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quiz');
global.db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db ready')
});*/
//______________________________________________________________________________________________________________________
//__________________discord_____________________________________________________________________________________________
var dis = require('./discordbot/dis.js');
var Discord = require("discord.js");
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
dsbot.music.start(dsbot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: process.env.youtubeKey
});


//______________________________________________________________________________________________________________________
//___________________token______________________________________________________________________________________________
dsbot.login("NTMyOTY5NTI5ODU3NDA5MDYz.DyJ6YA.XsgXgGfUchRmThVPqYOdb4mfHmE");
//______________________________________________________________________________________________________________________
//___________________event______________________________________________________________________________________________
/*dsbot.on('ready', dis.dsready);
dsbot.on('message', dis.dismessage);
dsbot.on('messageReactionAdd', dis.disaddreaction);
dsbot.on('messageReactionRemove', dis.disremovereaction);
dsbot.on('channelCreate', dis.dischannelcreate);
dsbot.on('channelDelete', dis.dischanneldelete);
dsbot.on('channelPinsUpdate', dis.dischannelpinsupdate);
dsbot.on('channelUpdate', dis.dischannelupdate);
dsbot.on('clientUserGuildSettingsUpdate', dis.disclientuserguildsettingsupdate);
dsbot.on('clientUserSettingsUpdate', dis.disclientusersettingsupdate);
dsbot.on('debug', dis.disdebug);
dsbot.on('disconnect', dis.disdisconnect);
dsbot.on('emojiCreate', dis.disemojicreate);
dsbot.on('emojiDelete', dis.disemojidelete);
dsbot.on('emojiUpdate', dis.disemojiupdate);
dsbot.on('error', dis.diserror);
dsbot.on('guildBanAdd', dis.disguildbanadd);
dsbot.on('guildBanRemove', dis.disguildbanremove);
dsbot.on('guildCreate', dis.disguildCreate);
dsbot.on('guildDelete', dis.disguildDelete);
dsbot.on('guildMemberAdd', dis.disguildMemberAdd);
dsbot.on('guildMemberAvailable', dis.disguildMemberAvailable);
dsbot.on('guildMemberRemove', dis.disguildMemberRemove);
dsbot.on('guildMembersChunk', dis.disguildMembersChunk);
dsbot.on('guildMemberSpeaking', dis.disguildMemberSpeaking);
dsbot.on('guildMemberUpdate', dis.disguildMemberUpdate);
dsbot.on('guildUnavailable', dis.disguildUnavailable);
dsbot.on('guildUpdate', dis.disguildUpdate);
dsbot.on('messageDelete', dis.dismessageDelete);
dsbot.on('messageDeleteBulk', dis.dismessageDeleteBulk);
dsbot.on('messageReactionRemoveAll', dis.dismessageReactionRemoveAll);
dsbot.on('messageUpdate', dis.dismessageUpdate);
dsbot.on('presenceUpdate', dis.dispresenceUpdate);
dsbot.on('rateLimit', dis.disrateLimit);
dsbot.on('reconnecting', dis.disreconnecting);
dsbot.on('resume', dis.disresume);
dsbot.on('roleDelete', dis.disroleDelete);
dsbot.on('roleCreate', dis.disroleCreate);
dsbot.on('roleUpdate', dis.disroleUpdate);
dsbot.on('typingStart', dis.distypingStart);
dsbot.on('typingStop', dis.distypingStop);
dsbot.on('userNoteUpdate', dis.disuserNoteUpdate);
dsbot.on('userUpdate', dis.disuserUpdate);
dsbot.on('voiceStateUpdate', dis.disvoiceStateUpdate);
dsbot.on('warn', dis.diswarn);*/
//______________________________________________________________________________________________________________________
//_______________________vk bot__________________________________________________________________________________________
// var vkmidleware = require('./vkbot/botvk');
// var VkBot = require('node-vk-bot-api');
// var Session = require('node-vk-bot-api/lib/session');
// global.vkbot = new VkBot({
//     token: '9d8db6d94dde6e1ab0c8dbb1cc408fa4f3f5cea4f14f5372030a27d906612fdd6738d731dede363084e88'
// });
// const session = new Session();
//
// vkbot.use(session.middleware());
//
//
// vkbot.event('message_new', vkmidleware.vkmessage_new);
// vkbot.event('message_reply', vkmidleware.vkmessage_reply);
// vkbot.event('message_edit', vkmidleware.vkmessage_edit);
// vkbot.event('message_allow', vkmidleware.vkmessage_allow);
// vkbot.event('message_deny', vkmidleware.vkmessage_deny);
// vkbot.event('photo_new', vkmidleware.vkphoto_new);
// vkbot.event('photo_comment_new', vkmidleware.vkphoto_comment_new);
// vkbot.event('photo_comment_edit', vkmidleware.vkphoto_comment_edit);
// vkbot.event('photo_comment_restore', vkmidleware.vkphoto_comment_restore);
// vkbot.event('photo_comment_delete', vkmidleware.vkphoto_comment_delete);
// vkbot.event('audio_new', vkmidleware.vkaudio_new);
// vkbot.event('video_new', vkmidleware.vkvideo_new);
// vkbot.event('video_comment_new', vkmidleware.vkvideo_comment_new);
// vkbot.event('video_comment_edit', vkmidleware.vkvideo_comment_edit);
// vkbot.event('video_comment_restore', vkmidleware.vkvideo_comment_restore);
// vkbot.event('video_comment_delete', vkmidleware.vkvideo_comment_delete);
// vkbot.event('wall_post_new',vkmidleware.vkwall_post_new);
// vkbot.event('wall_repost', vkmidleware.vkwall_repost);
// vkbot.event('wall_reply_new', vkmidleware.vkwall_reply_new);
// vkbot.event('wall_reply_edit', vkmidleware.vkwall_reply_edit);
// vkbot.event('wall_reply_restore', vkmidleware.vkwall_reply_restore);
// vkbot.event('wall_reply_delete', vkmidleware.vkwall_reply_delete);
// vkbot.event('board_post_new', vkmidleware.vkboard_post_new);
// vkbot.event('board_post_edit', vkmidleware.vkboard_post_edit);
// vkbot.event('board_post_restore', vkmidleware.vkboard_post_restore);
// vkbot.event('board_post_delete', vkmidleware.vkboard_post_delete);
// vkbot.event('market_comment_new', vkmidleware.vkmarket_comment_new);
// vkbot.event('market_comment_edit', vkmidleware.vkmarket_comment_edit);
// vkbot.event('market_comment_restore', vkmidleware.vkmarket_comment_restore);
// vkbot.event('market_comment_delete', vkmidleware.vkmarket_comment_delete);
// vkbot.event('group_leave', vkmidleware.vkgroup_leave);
// vkbot.event('group_join', vkmidleware.vkgroup_join);
// vkbot.event('user_block', vkmidleware.vkuser_block);
// vkbot.event('user_unblock', vkmidleware.vkuser_unblock);
// vkbot.event('poll_vote_new', vkmidleware.vkpoll_vote_new);
// vkbot.event('poll_vote_new', vkmidleware.vkpoll_vote_new);
// vkbot.event('group_officers_edit ', vkmidleware.vkgroup_officers_edit );
// vkbot.event('group_change_settings ', vkmidleware.vkgroup_change_settings );
// vkbot.event('group_change_photo ', vkmidleware.vkgroup_change_photo );
//
// vkbot.startPolling(vkmidleware.vkstart);
// //______________________________________________________________________________________________________________________

//______________________________________________________________________________________________________________________
var app = express();
/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(sess({
    secret: 'kekeke',
    name: 'dissess',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

*/

module.exports = app;
/*module.exports.db = db;*/



