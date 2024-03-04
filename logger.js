const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create a logger instance
const logger = createLogger({
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        // Log to console
        new transports.Console(),
        // Log errors to a file
        new transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger;

