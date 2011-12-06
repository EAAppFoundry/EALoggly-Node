// Require the logger.  this works if it's in the same folder as the consuming .js
// if not, adjust the path accordingly
var logger = require('./ealogger');

/*
 * 	We recommend using the following values for log level
 * 	info, debug, warn, error, fatal
 * 	this will make it easier to searh your log files 
 * 	using the Loggly website
 * 
 *	parameter info: .log(logLevel, machineName, logMessage);
 */
logger.log('info', 'aspen', 'this is an info line.. im here!');
logger.log('debug', 'denver', 'hey look at me, Im debugging');
logger.log('warn', 'eavdevblah01', 'warning, some bad shit is about to go down');
logger.log('error','eavdevyep02','yep, bad shit happened.. thats what you get');
logger.log('fatal', 'mylamepc', 'Tango Uniform!!!!')


console.log('done');
