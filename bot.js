// Requirements
var Discord     = require('discord.io');
var logger      = require('winston');
var auth        = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

