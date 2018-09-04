var mongoose = require('mongoose')

var SchemaTypes = mongoose.Schema.Types;
var record_schema = new mongoose.Schema({
    command: String,
    device_id: String,
    voltage: SchemaTypes.Double,
    e1: SchemaTypes.Double,
    e2: SchemaTypes.Double,
    e3: SchemaTypes.Double,
    e4: SchemaTypes.Double,
    e5: SchemaTypes.Double,
    uuid : String,
    pl1: SchemaTypes.Double,
    pl2: SchemaTypes.Double,
    pl3: SchemaTypes.Double,
    pl4: SchemaTypes.Double,
    pl5: SchemaTypes.Double,
    date_time: String,
    data_time : Number,
    date : String
})

module.exports = mongoose.model('records', record_schema)