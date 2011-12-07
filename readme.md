# EALoggly
A node.js client wrapper for loggly.com


## Dependencies
- [Node-Loggly] (https://github.com/nodejitsu/node-loggly) - you'll need to install Nodejitsu's node-loggly npm module to use the EALogger.  To do this, just run    
``` bash
	$ [sudo] npm install loggly
```


##Usage
Using the EALoggly wrapper is simple.  Just pull the ```ealogger.js``` file from the [github repo](https://github.com/donwb/ealogger) and drop it in the same folder as your node.js application.    

###Configuration
Next, you need to add some configuration information in order to ensure your log data goes to the correct loggly.com input.  You do this by modifying the JSON for the ```config``` variable at the top of the ```ealogger.js``` file.  

```
var config = {
  "subdomain": "your-loggly-domain",
  "user": "loggly-user-name",
  "password": "loggly-password",
  "json":true,
  "apikey":"your-crazy-long-loggly-api-key"
};
```
If you have any questions about these values please see the loggly.com documentation at [wiki.loggly.com] (http://wiki.loggly.com/).

### Logging
Using the logger is simple.  First you need to ```require``` the ealogger.js module.
```
	var logger = require('./ealogger');
```  
_Note: The above code assumes the ealogger.js file is in the same folder as the .js file you want to log from.  If it's not, adjust your path accordingly._

Now that everything is configured, logging is as simple as:   
```
	logger.log('info', 'myMachine', 'Entering the write method');
```   
The parameter info for the log method is as follows:  
```
	logger.log(logLevel, machineName, logMessage)
```   
Using one of the following 5 log levels makes it easier to isolate your log messages on the companion EALoggly site:   
```info```, ```debug```, ```warn```, ```error```, ```fatal```   

