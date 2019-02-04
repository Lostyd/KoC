var express = require('express');
var router = express.Router();
var www = require('../bin/www');
var schems = require('../db/shems');
var disuser = schems.disuser;
/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.uuid) {

        res.render('index');
    } else {
        res.render('index');
    }

});

router.post('/auth', function (req, res, next) {
    disuser.findOne({uuid: req.body.token}, function (err, rows) {
        if(rows !== null){

            res.status(200).send({'username': rows.username, 'tag': rows.tag, 'avatar': rows.avatar})
        }else{
            res.sendStatus(400)
        }
    });


});

module.exports = router;
