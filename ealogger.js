var loggly = require('loggly');
var Config = require('./config');
var config = new Config();

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


var LogInfo = function LogInfo(level, machine, message){
  this.level = level;
  this.machine = machine;
  this.message = message;
};

function log(level, machine, message){
	var li = new LogInfo(level, machine, message);
	client.log(apikey, li);
};

module.exports.log = log;
