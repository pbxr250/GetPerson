var person = require("./DefaultDataBoot/person");

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });

  app.get('/boot/migrate/default', function(req, res) {
  	person(app, function(err) {
		if (err) {
			res.status(500).send(err);
		}
		else {
			res.status(200).send('Default data has been migrated to db');
		}
	});
  });

}