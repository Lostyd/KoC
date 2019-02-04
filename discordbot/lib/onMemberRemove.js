var schems = require('../../db/shems');
var disuser = schems.disuser;

exports.commands = function (guild) {
    if(guild.guild.id === '532970439568261142') {
        disuser.findOneAndDelete({'userid': guild.user.id}, function (err, result) {
        })
    }
};