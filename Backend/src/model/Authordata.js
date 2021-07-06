//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/LibraryApp');

//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author:String,
    books:String,
    language:String,
    image:String


});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;