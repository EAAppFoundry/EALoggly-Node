var loggly = require('loggly');


/*
 *  Add your Loggly config here.  You get the apikey from the
 *  configuration section of your input
 */
var config = {
  "subdomain": "your-loggly-domain",
  "user": "loggly-user-name",
  "password": "loggly-password",
  "json":true,
  "apikey":"your-crazy-long-loggly-api-key"
};
/*
 * No code changes below this line are necessary
 ---------------------
 */

var logConf = {
    subdomain: config.subdomain,
    auth: {
      username: config.username,
      password: config.password
    },
    json: config.json
};
var apikey = config.apikey
var client = loggly.createClient(logConf);

// LogInfo class
var LogInfo = function LogInfo(level, machine, message){
  this.level = level;
  this.machine = machine;
  this.message = message;
};



// Log method exposed to consumers
module.exports.log = function (level, machine, message){
	var li = new LogInfo(level, machine, message);
	client.log(apikey, li);
};

