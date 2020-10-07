const moment = require('moment');

function timer(req, res, next) {
    console.log(moment().format('LLLL'));
    next(); 
};

module.exports = timer;