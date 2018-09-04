let winston = require('winston'),
    fs = require('fs'),
    mt = require('moment-timezone'),
    logDir = './logs';

require('winston-daily-rotate-file')

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}



module.exports = function (){
    let transport = new (winston.transports.DailyRotateFile)({
        filename: process.env.LOGS_PATH,
        datePattern: 'YYYY-MM-DD-HH',
        prepend: true,
        level: 'verbose',
        timestamp : function(){
          return mt.tz("Asia/Kolkata").format().toString()
        }
    })
    var logger = new (winston.Logger)({
        transports: [
          transport
        ]
    })
    return {
        logs : logger
    }
}