
var sp = require('./searchProvider');



/*
sp.search('log-client', 'json.level:debug', "NOW-24HOURS", function(err, logs){
	console.log('-------debug logs w/24 hour date filter-----------');
	console.log(logs);
	console.log('');
});

sp.search('log-client', 'json.level:fatal', null, function(err, logs){
	console.log('----- fatal logs w/no date filter--------');
	console.log(logs);
	console.log('');
})
*/

sp.getInputs(function(err, inputs){
	console.log('--------- Available inputs---------')
	console.log(inputs);
	console.log('');
});

/*
sp.getDevices(function(err, devices){
	console.log('--------- Devices ----------')
	console.log(devices);
	console.log('');
});
*/
