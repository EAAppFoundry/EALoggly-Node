# EALoggly
A node.js client wrapper for loggly.com


## Dependencies
- [Node-Loggly] (http://nodejitisu.com) - you'll need to install Nodejitsu's node-loggly npm module to use the EALogger.  To do this, just run    
``` bash
	$ [sudo] npm install loggly
```


##Usage
Using the EALoggly wrapper is simple.  Just pull the ```ealogger.js``` file from the [github repo](https://github.com/donwb/ealogger) and drop it in the same folder as your node.js application.    

Next, you need to add some configuration information in order to ensure the log information goes to the correct loggly.com input.  You do this by modifying the JSON for the ```config``` variable at the top of the ```ealogger.js``` file.  

```
var config = {
  "subdomain": "your-loggly-domain",
  "user": "loggly-user-name",
  "password": "loggly-password",
  "json":true,
  "apikey":"your-crazy-long-loggly-api-key"
};
```
