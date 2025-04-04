const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"Provide Name"]     
    },
    lastName: {
        type: String,
    },
    email : {
        type: String,
        required : [true, "Provide Email"],
        unique : true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
    },
    mobNumber : {
        type: Number,
        required : [true, "Provide Mobile Number"],
        unique : true,
        minlength : 10

    },
    AdharCard : {
        type: Number,
        required : [true, "Provide Adhar Card Number"],
        unique : true,
        minlength : 12,
    },
    DOB: {
        type: Date,
        required: [true, "Provide Date of Birth"],
    },
    Gender : {
        type: String,
        required : [true, "Provide Gender"],
    },
    password : {
        type: String,
        required : [true, "Provide Password"],
        minlength : 8,
        unique : true,
    },
    confirmPassword : {
        type: String,
        required : [true, "Provide Password"],
        minlength : 8,
        unique : true,
    },
    Address : {
        type: String,
        required : true,
    }
})

userSchema.pre('save', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Password and Confirm Password does not match');
    }
    next();
})

const user = mongoose.model('user', userSchema);
module.exports = user;