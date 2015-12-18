var mongoose     = require('mongoose');

var ItemSchema   = new mongoose.Schema({
    name: String,
    image: String
});

module.exports = mongoose.model('Item', ItemSchema);