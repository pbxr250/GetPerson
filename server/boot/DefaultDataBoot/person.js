var fs = require('fs');

module.exports = function (app, callback) {
	return new Promise(function (resolve, reject) {
		app.dataSources.db.automigrate('Person', function(err) {
			if (err) throw err;
			var mdPerson = app.models.Person;
			var fData = fs.readFileSync('storage/DefaultData/people.json', 'utf8');
			var aPeople = JSON.parse(fData);

			mdPerson.create(aPeople, function (err, model) {
	            if (err)
	            {
	            	reject(err);		
	            } else {
		            console.log('Created People:', model);
		            resolve();
		        }
	        });
		});
	}).then(function() {
			callback()
		}, function(err) {
			callback(err);
		});
};
