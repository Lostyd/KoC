var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  String,
    vkid: String,
    tag: String,
    avatar: String,
    userid: String,
    uuid: String,
    exp: Number,
    lvl: Number,
    cash: Number,
    bank: Number,
    messagedate: Number
});

var mazeSchema = new Schema({
    token: String,
   money: Number,
   sunduk: Number,
   rum: Number,
   chasiki: Number,
   subli: Number,
   bochka: Number,
    finish: Number
});

exports.dismaze = mongoose.model('mazes', mazeSchema);
exports.disuser = mongoose.model('users', userSchema);