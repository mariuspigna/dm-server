const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name:{type: String, required: true},
    firstName:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    confirmPassword:{type: String, required: false},
    role:{type: String, required: true},
    address:{type: String, required: true},
    postalCode:{type: Number, required: true},
    country:{type: String, required: true},
});

userSchema.plugin(uniqueValidator);
//'User' => 'user' + 's' => users
module.exports = mongoose.model('User',userSchema);