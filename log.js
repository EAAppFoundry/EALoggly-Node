var logger = require('./ealogger');

logger.log('fatal', 'pc', 'oh shit!')
logger.log('debug', 'denver', 'this is some info for you');
logger.log('info', 'aspen', 'this is an info line.. im here!');
logger.log('warn', 'eavdevblah01', 'warning, some bad shit is about to go down');
logger.log('error','eavdevyep02','yep, bad shit happened.. thats what you get');


console.log('done');
