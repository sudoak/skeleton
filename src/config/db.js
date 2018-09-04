var mongoose = require('mongoose')
//mongoose.Promise = require('bluebird')
require('mongoose-double')(mongoose)
var SchemaTypes = mongoose.Schema.Types
var figlet = require('figlet');
var moment = require('moment-timezone');

figlet(process.env.APP_NAME, function(err, data) {
    if (err) {
        console.log('SYNC DATA...');
        console.dir(err);
        return;
    }
    console.log(data)
});
const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 10000, // Reconnect every 10s
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  
mongoose.connect(`mongodb://localhost/${process.env.DB}`,options);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongo Database Connected " + moment().tz("Asia/Kolkata").format().toString());
});
