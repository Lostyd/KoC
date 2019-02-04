var schems = require('../db/shems');
var disuser = schems.disuser;
var dismaze = schems.dismaze;
var newmaze;


exports.command = function (socket) {
    socket.on('money', function (token) {
        if (token) {
            dismaze.findOne({token: token}, function (err, result) {
                if (result !== null) {
                    if ((Date.now() - result.money) > Number(process.env.cdMoney)) {
                        disuser.findOneAndUpdate({uuid: token}, {$inc: {cash: Number(process.env.money)}}, function () {
                            dismaze.findOneAndUpdate({token: token}, {money: Date.now()}, function (err, rows) {
                                socket.emit('obnovil')
                            })
                        })
                    } else {
                        socket.emit('nelza')
                    }
                } else {
                    disuser.findOneAndUpdate({uuid: token}, {$inc: {cash: Number(process.env.money)}}, function () {
                    });
                    newmaze = new dismaze({
                        'token': token,
                        'money': Date.now(),
                        'sunduk': 0,
                        'rum': 0,
                        'chasiki': 0,
                        'subli': 0,
                        'bochka': 0,
                        'finish': 0
                    });
                    socket.emit('cozdanno');
                    newmaze.save()
                }
            })
        }
    });

    socket.on('sunduk', function (token) {
        if (token) {
            dismaze.findOne({token: token}, function (err, result) {
                if (result !== null) {
                    if ((Date.now() - result.sunduk) > Number(process.env.cdSunduk)) {
                        disuser.findOneAndUpdate({uuid: token}, {$inc: {cash: Number(process.env.sunduk)}}, function () {
                            dismaze.findOneAndUpdate({token: token}, {sunduk: Date.now()}, function (err, rows) {
                                socket.emit('obnovil')
                            })
                        })
                    } else {
                        socket.emit('nelza')
                    }
                } else {
                    disuser.findOneAndUpdate({uuid: token}, {$inc: {cash: Number(process.env.sunduk)}}, function () {
                    });
                    newmaze = new dismaze({
                        'token': token,
                        'money': 0,
                        'sunduk': Date.now(),
                        'rum': 0,
                        'chasiki': 0,
                        'subli': 0,
                        'bochka': 0,
                        'finish': 0
                    });
                    socket.emit('cozdanno');
                    newmaze.save(function (err, result) {

                    })
                }
            })
        }
    });

    socket.on('rum', function (token) {
        if (token) {
            dismaze.findOne({token: token}, function (err, result) {
                if (result !== null) {
                    if ((Date.now() - result.rum) > Number(process.env.cdRum)) {
                        disuser.findOneAndUpdate({uuid: token}, {$inc: {exp: Number(process.env.rum)}}, function () {
                            dismaze.findOneAndUpdate({token: token}, {rum: Date.now()}, function (err, rows) {
                                socket.emit('obnovil')
                            })
                        })
                    } else {
                        socket.emit('nelza')
                    }
                } else {
                    disuser.findOneAndUpdate({uuid: token}, {$inc: {exp: Number(process.env.rum)}}, function (err, result) {
                        disuser.findOne({uuid: token},function (err, rows) {
                            console.log(rows)
                        })
                    });
                    newmaze = new dismaze({
                        'token': token,
                        'money': 0,
                        'sunduk': 0,
                        'rum': Date.now(),
                        'chasiki': 0,
                        'subli': 0,
                        'bochka': 0,
                        'finish': 0
                    });
                    socket.emit('cozdanno');
                    newmaze.save(function (err, result) {
                    })
                }
            })
        }
    });


};