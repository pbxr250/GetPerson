'use strict';

var fs = require('fs');

module.exports = function(Person) {
	Person.status = function(cb) {
		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var OPEN_HOUR = 6;
		var CLOSE_HOUR = 20;
		console.log('Current hour is %d', currentHour);
		var response;
		if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
			response = 'We are open for business.';
		} else {
			response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
		}
		cb(null, response);
	};
	Person.remoteMethod(
		'status', {
			http: {
				path: '/status',
				verb: 'get'
			},
			returns: {
				arg: 'status',
				type: 'string'
			}
		}
	);
	Person.getPhoto = function(personId, fcallback) {
		Person.findById(personId, function(err, instance) {
			if (err)
				return fcallback(null, "person not found");
			var sPath = 'storage/Images/Person/photo/' + personId + '.jpg';
			fs.readFile(sPath, function(err, stream) {
				if (err) return fcallback(err);
				// stream can be any of: string, buffer, ReadableStream (e.g. http.IncomingMessage)
				fcallback(null, stream, 'image/jpg');
			});
		});
	};

	//http://0.0.0.0:3000/api/people/getphoto?id=1	
	Person.remoteMethod(
		'getPhoto', {
			http: {
				path: '/getphoto',
				verb: 'get'
			},
			accepts: {
				arg: 'id',
				type: 'number',
				http: {
					source: 'query'
				}
			},
			returns: [{
				arg: 'body',
				type: 'file',
				root: true
			}, {
				arg: 'Content-Type',
				type: 'string',
				http: {
					target: 'header'
				}
			}]
		}
	);
};