const winston = require('winston');

// your centralized logger object
const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: winston.format.json(),
    transports: [
        new (winston.transports.Console)({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
