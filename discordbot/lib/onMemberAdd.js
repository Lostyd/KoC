var schems = require('../../db/shems');
var disuser = schems.disuser;

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 *
 * @param guild.id
 * guild.user.id
 * guild.user.username
 * guild.user.discriminator
 * guild.user.avatarURL
 * uuidv4()
 */
exports.command = function (guild) {
    if(guild.guild.id === '532970439568261142'){
    var newUser = new disuser({
        'username': guild.user.username,
        'vkid': "-",
        'tag': guild.user.discriminator,
        'avatar': guild.user.avatarURL,
        'userid': guild.user.id,
        'uuid': uuidv4(),
        'exp': 0,
        'lvl': 0,
        'cash': 0,
        'bank': 0,
        'messagedate': Date.now() - 10000000
    });
    newUser.save(function (err, result) {
    })
    }
};