//http://hassansin.github.io/working-with-mongodb-ttl-index
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goingModelSchema = new Schema({
    locId: String,
    users: [String],
    createdAt:{type: Date, default: Date.now, expires: '24h'}
});
module.exports = mongoose.model('going', goingModelSchema);